import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'cdn.pixabay.com',
      'cdn.iconscout.com',
      'www.npmjs.com',
      'ghchart.rshah.org',
      'cdn.simpleicons.org',
      'www.mediasmart.io',
      'images.crunchbase.com',
      'www.finwave.es',
    ]
  },
};

export default nextConfig;
