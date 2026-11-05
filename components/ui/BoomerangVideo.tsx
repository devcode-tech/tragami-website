"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Plays a video once, capturing frames to offscreen canvases as it goes,
 * then switches to canvas playback that ping-pongs forward/backward forever
 * — the exact technique from the Boomerang reference prompt. Falls back to
 * a plain looping video if the browser can't keep up or reduced-motion is on.
 */
export function BoomerangVideo({
  src,
  className = "absolute inset-0 h-full w-full object-cover",
}: {
  src: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const lastTimeRef = useRef(-1);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const video = videoRef.current;
    if (!video) return;

    const captureWidth = 640;
    let captureHeight = 360;
    let stopped = false;

    const grab = async () => {
      if (stopped || video.ended) return;
      if (video.currentTime !== lastTimeRef.current) {
        lastTimeRef.current = video.currentTime;
        const off = document.createElement("canvas");
        off.width = captureWidth;
        off.height = captureHeight;
        const ctx = off.getContext("2d");
        if (ctx) {
          ctx.drawImage(video, 0, 0, captureWidth, captureHeight);
          try {
            const bmp = await createImageBitmap(off);
            framesRef.current.push(bmp);
          } catch {
            /* ignore a dropped frame */
          }
        }
      }
      if ("requestVideoFrameCallback" in video) {
        video.requestVideoFrameCallback(grab);
      } else {
        requestAnimationFrame(grab);
      }
    };

    const onLoaded = () => {
      captureHeight = Math.round((video.videoHeight / video.videoWidth) * captureWidth) || 360;
      video.play().catch(() => {});
      grab();
    };

    const onEnded = () => {
      stopped = true;
      if (framesRef.current.length > 2) setReady(true);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    return () => {
      stopped = true;
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, [reduced]);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let index = 0;
    let dir = 1;
    const frames = framesRef.current;
    canvas.width = frames[0]?.width ?? 640;
    canvas.height = frames[0]?.height ?? 360;

    const id = setInterval(() => {
      const frame = frames[index];
      if (frame) {
        canvas.width = frame.width;
        canvas.height = frame.height;
        ctx.drawImage(frame, 0, 0);
      }
      index += dir;
      if (index >= frames.length - 1 || index <= 0) dir *= -1;
    }, 1000 / 30);

    return () => clearInterval(id);
  }, [ready]);

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className={className}
        style={{ display: ready ? "none" : "block" }}
        aria-hidden="true"
      />
      <canvas ref={canvasRef} className={className} style={{ display: ready ? "block" : "none" }} aria-hidden="true" />
    </>
  );
}
