import type { NextConfig } from "next";

// Configuration Next.js optimisée pour le SEO et les performances
const nextConfig: NextConfig = {
  // Optimisations pour les images - améliore le LCP et réduit la bande passante
  images: {
    formats: ["image/webp", "image/avif"], // Formats modernes pour de meilleures performances
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Tailles adaptatives
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tailles pour les icônes
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache d'un an pour les images optimisées
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**", // Permet toutes les images externes (à restreindre en production)
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  // Compression pour réduire la taille des bundles
  compress: true,

  // Headers de sécurité et SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Sécurité
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Cache pour les assets statiques
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache spécifique pour les images
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Optimisations expérimentales pour les performances
  experimental: {
    // optimizeCss: true, // Désactivé temporairement pour éviter l'erreur critters
    scrollRestoration: true, // Restauration de la position de scroll
  },

  // Configuration pour le build de production
  poweredByHeader: false, // Supprime le header "X-Powered-By: Next.js" pour la sécurité

  // Turbopack config (Next.js 16+ uses Turbopack by default)
  turbopack: {},
};

export default nextConfig;
