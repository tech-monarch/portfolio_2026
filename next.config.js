/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance: compress responses
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Security + SEO HTTP headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow AI crawlers
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1" },
          // Security
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Performance
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        // Long cache for static assets
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirects for alternate name variants (SEO)
  async redirects() {
    return [
      {
        source: "/tech-monarch",
        destination: "/",
        permanent: true,
      },
      {
        source: "/pantheon",
        destination: "https://launchbase.one",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
