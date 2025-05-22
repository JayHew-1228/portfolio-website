/** @type {import('next').NextConfig} */
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Base paths - empty for root domain
  basePath: '',
  assetPrefix: isProd ? 'https://portfolio-website-murex-theta.vercel.app' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
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
    
    // Important: return the modified config
    return config;
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Disable powered by header
  poweredByHeader: false,
  
  // Add trailing slash for static export
  trailingSlash: true,
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // Ensure static export works with app router
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
