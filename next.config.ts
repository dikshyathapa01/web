import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath:"/web",
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