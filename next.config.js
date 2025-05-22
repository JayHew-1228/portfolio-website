/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static export
  // output: 'export', // Commented out for Vercel deployment
  
  // Base paths
  basePath: '',
  assetPrefix: isProd ? 'https://portfolio-website-murex-theta.vercel.app' : '',
  
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
  
  // Add base path for static assets
  publicRuntimeConfig: {
    basePath: '',
  },
};

module.exports = nextConfig;
