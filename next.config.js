/** @type {import('next').NextConfig} */
const path = require('path');

// Check if running in production
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-website' : '';

const nextConfig = {
  // Disable the static export since we're using Vercel
  output: 'standalone',
  
  // Base path for assets
  basePath: isProd ? basePath : undefined,
  assetPrefix: isProd ? basePath : undefined,
  
  // Enable React strict mode
  reactStrictMode: true,
  
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
  webpack: (config, { isServer }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    
    return config;
  },
  
  // Experimental features
  experimental: {
    // Enable React compiler
    reactCompiler: true,
    // Enable SWC minification
    swcMinify: true,
  },
  
  // Enable source maps in production
  productionBrowserSourceMaps: true,
  
  // Disable powered by header
  poweredByHeader: false,
  
  // Enable compression in production
  compress: isProd,
  
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Configure headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
