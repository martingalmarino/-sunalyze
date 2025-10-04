/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better performance
  output: 'standalone',
  
  // Optimize images
  images: {
    unoptimized: false,
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['@types/react', '@types/react-dom'],
  },
  
  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/solar-calculator',
        permanent: true,
      },
      {
        source: '/solar-roi',
        destination: '/solar-calculator',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
