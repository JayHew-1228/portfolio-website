/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for Vercel deployment
  // output: 'export',
  
  // Base paths
  basePath: '',
  
  // Image optimization
  images: {
    domains: ['portfolio-website-murex-theta.vercel.app'],
  },
  
  // TypeScript and ESLint config
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Disable powered by header
  poweredByHeader: false,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Ensure app directory is enabled
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
