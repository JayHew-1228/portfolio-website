/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Use static export for Vercel
  output: 'export',
  
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
  
  // Asset prefix for CDN
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
  
  // Image optimization
  images: {
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
};

module.exports = nextConfig;
