/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add headers to prevent caching
  async headers() {
    return [
      {
        source: '/solar-calculator/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig