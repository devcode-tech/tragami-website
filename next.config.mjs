/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    agentUpgrade: 'security',
  },
  async redirects() {
    return [
      { source: '/capture', destination: '/conversion-giveaways', permanent: true },
      { source: '/distribution', destination: '/channel-giveaways', permanent: true },
      { source: '/retain', destination: '/conversion-giveaways', permanent: true },
      { source: '/channel', destination: '/channel-giveaways', permanent: true },
      { source: '/conversion', destination: '/conversion-giveaways', permanent: true },
      { source: '/platform/data-quality', destination: '/platform/attribution', permanent: true },
      { source: '/platform/integrations', destination: '/platform/lead-capture', permanent: true },
    ];
  },
};

export default nextConfig;
