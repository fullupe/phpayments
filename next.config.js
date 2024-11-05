/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  images: {
    domains: ['your-api-domain'], // Replace with your actual domain
  },
};

module.exports = nextConfig;
