/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myblog.storage.c2.liara.space',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
