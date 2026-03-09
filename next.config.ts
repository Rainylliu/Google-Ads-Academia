import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/rna-sequencing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
