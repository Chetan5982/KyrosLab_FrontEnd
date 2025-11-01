/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  async headers() {
    return [
       {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
      {
        source: "/_next/(.*)", // Match any Next.js asset
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Example cache policy: 1 year
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.optimization.providedExports = true;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };

    return config;
  },
  eslint: {
    dirs: ["src", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    nextScriptWorkers: false,
  },
};

module.exports = nextConfig;

