import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
  images: {
    domains: ['cdn.pixabay.com', 'cdn.iconscout.com', 'www.npmjs.com']
  },
};

export default nextConfig;
