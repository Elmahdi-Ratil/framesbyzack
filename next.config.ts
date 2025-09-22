import type { NextConfig } from "next";

/*

const nextConfig: NextConfig = {
  // كيخلي Next.js يخرّج static HTML/CSS/JS
  output: "export",

  // تغيير اسم الفولدر من "out" لـ "distppppp"
  distDir: "distppppp",

  // الحل لمشكلة next/image مع static export
  images: {
    unoptimized: true, // الصور غادي تبان مباشرة بدون تحسين Next.js
  },

  experimental: {
    turbo: {
      rules: {}, // إعدادات turbo (اختياري)
    },
  },
};
*/

const nextConfig: NextConfig = {
  /* config options here */
  
};

module.exports = {
  experimental: {
    turbo: {
      rules: {}, // optional if you want turbo customization
    },
  },
};


export default nextConfig;
