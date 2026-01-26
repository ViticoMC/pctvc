/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ← OBLIGATORIO
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
};

export default nextConfig;
