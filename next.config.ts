import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost",
    "192.168.1.89"
  ],
  turbopack: {
    root: ".",
  }
};
export default nextConfig;