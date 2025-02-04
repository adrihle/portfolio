import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en-US',
        permanent: true,
      }
    ]
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mediasmart.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.crunchbase.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.finwave.es',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
