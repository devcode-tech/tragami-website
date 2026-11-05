import { cn } from "@/lib/utils";

/** 7-row bitmap glyphs. Digits are complete; letters cover just enough to
 *  spell a few module names ("Engage", "Retain") as a small signature touch. */
const GLYPHS: Record<string, string[]> = {
  "0": ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  "1": ["010", "110", "010", "010", "010", "010", "111"],
  "2": ["01110", "10001", "00001", "00010", "00100", "01000", "11111"],
  "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
  "4": ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  "5": ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
  "6": ["01110", "10000", "10000", "11110", "10001", "10001", "01110"],
  "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
  "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  "9": ["01110", "10001", "10001", "01111", "00001", "00001", "01110"],
  ".": ["0", "0", "0", "0", "0", "0", "1"],
  I: ["111", "010", "010", "010", "010", "010", "111"],
  a: ["00000", "00000", "01110", "00001", "01111", "10001", "01111"],
  e: ["00000", "00000", "01110", "10001", "11111", "10000", "01110"],
  g: ["00000", "00000", "01111", "10001", "01111", "00001", "01110"],
  i: ["1", "0", "1", "1", "1", "1", "1"],
  l: ["10", "10", "10", "10", "10", "10", "01"],
  n: ["00000", "00000", "11110", "10001", "10001", "10001", "10001"],
  t: ["010", "010", "111", "010", "010", "010", "001"],
  r: ["00000", "00000", "10110", "11001", "10000", "10000", "10000"],
};

export function DotNumber({
  value,
  dotRadius = 1.8,
  className,
}: {
  value: string;
  dotRadius?: number;
  className?: string;
}) {
  const pitchX = 4;
  const pitchY = 4;
  const gapX = 4;
  let cursor = 0;
  const circles: { cx: number; cy: number }[] = [];
  let supported = true;

  for (const ch of value) {
    const glyph = GLYPHS[ch];
    if (!glyph) {
      supported = false;
      break;
    }
    const width = Math.max(...glyph.map((row) => row.length));
    glyph.forEach((row, ry) => {
      for (let cx = 0; cx < row.length; cx++) {
        if (row[cx] === "1") {
          circles.push({
            cx: cursor + cx * pitchX + 1.55,
            cy: ry * pitchY + 1.55,
          });
        }
      }
    });
    cursor += width * pitchX + gapX;
  }

  if (!supported || circles.length === 0) {
    return <span className={className}>{value}</span>;
  }

  return (
    <svg
      viewBox={`0 0 ${cursor} 28`}
      className={className}
      fill="currentColor"
      role="img"
      aria-label={value}
    >
      {circles.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={dotRadius} />
      ))}
    </svg>
  );
}
