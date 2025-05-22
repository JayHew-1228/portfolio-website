/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Base paths
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? 'https://portfolio-website-murex-theta.vercel.app' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
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
  
  // Add trailing slash for static export
  trailingSlash: true,
  
  // Add base path for static assets
  publicRuntimeConfig: {
    basePath: isProd ? '' : '',
  },
  
  // Disable app directory for now
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
