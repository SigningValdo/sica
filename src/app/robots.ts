// app/robots.ts
import type { MetadataRoute } from "next";

// Configuration du fichier robots.txt pour optimiser l'indexation
// Indique aux moteurs de recherche quelles pages indexer et où trouver le sitemap
export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sica-quebec.ca";

  return {
    rules: [
      {
        userAgent: "*", // Règles pour tous les robots
        allow: "/", // Autorise l'indexation de toutes les pages publiques
        disallow: [
          "/api/", // Bloque l'accès aux routes API
          "/admin/", // Bloque l'accès aux pages d'administration si elles existent
          "/_next/", // Bloque l'accès aux fichiers techniques Next.js
          "/private/", // Bloque l'accès aux pages privées
        ],
      },
      {
        userAgent: "Googlebot", // Règles spécifiques pour Google
        allow: "/",
        crawlDelay: 1, // Délai entre les requêtes pour éviter la surcharge
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // URL du sitemap pour l'indexation
    host: baseUrl, // URL canonique du site
  };
}
