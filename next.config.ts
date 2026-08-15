import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "localhost",
    "192.168.1.89"
  ],
  turbopack: {
    root: ".",
  }
};
export default nextConfig;