/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
  // Force the use of webpack 5 (which is the default in newer Next.js versions)
  webpack5: true,
  // Don't include the platform-specific SWC binary
  experimental: {
    forceSwcTransforms: false,
  },
  // Ensure we're using the correct SWC binary
  swcMinify: false, // Disable SWC minifier as it might be causing the issue
  // Add other configurations here if needed
}

// Only include SWC in development
if (process.env.NODE_ENV === 'development') {
  nextConfig.experimental = {
    ...nextConfig.experimental,
    swcMinify: true,
  };
}

module.exports = nextConfig
