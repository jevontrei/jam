import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jam-public-photos-etc.s3.ap-southeast-2.amazonaws.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "http.cat",
      },
    ],
  },
};

export default nextConfig;
