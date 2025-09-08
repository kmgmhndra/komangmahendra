// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Konfigurasi Anda sebelumnya
  reactStrictMode: false,

  // Konfigurasi untuk menangani file .glb
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/images',
          outputPath: 'static/images/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;