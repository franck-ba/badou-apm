import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/execution-examples",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/execution-examples.pdf",
        destination: "/case-studies/how-i-deliver",
        permanent: true,
      },
      {
        source: "/for/credit-acceptance",
        destination:
          "/case-studies/credit-acceptance-caps-dealer-yield-program?utm_source=credit-acceptance&utm_medium=direct-outreach&utm_campaign=senior-product-manager",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/case-studies/unlisted/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
