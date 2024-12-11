/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "ncrr3sx2l8kqrcqy.public.blob.vercel-storage.com", // Production or external source
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;