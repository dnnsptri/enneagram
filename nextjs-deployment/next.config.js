/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configuratie voor API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', // In ontwikkeling verwijst dit naar je Express server
      },
    ];
  },
};

module.exports = nextConfig;