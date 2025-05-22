/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Use static export for Vercel
  output: 'export',
  distDir: 'out',
  
  // Base paths
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? '' : '',
  
  // Image optimization
  images: {
    loader: 'imgix',
    path: '',
    unoptimized: true,
    domains: ['images.unsplash.com'],
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
  
  // Add trailing slash for static export
  trailingSlash: true,
  
  // Enable source maps in development
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
