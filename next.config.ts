import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (project site).
 * The site is served from https://<user>.github.io/<repo>, so in production
 * every asset/route needs the `/<repo>` prefix. Local dev stays at root.
 */
const repo = "engineering-portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
