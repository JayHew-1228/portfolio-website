/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
  webpack: (config, { isServer }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
      '@/*': path.resolve(__dirname, './*'),
    };
    return config;
  },
  experimental: {
    forceSwcTransforms: false,
  },
  swcMinify: false,
}

if (process.env.NODE_ENV === 'development') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    swcMinify: true,
  };
}

module.exports = nextConfig
