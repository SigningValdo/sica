// app/sitemap.ts
import type { MetadataRoute } from "next";

// Configuration du sitemap pour améliorer l'indexation par les moteurs de recherche
// Inclut toutes les pages importantes du site avec les bonnes priorités et fréquences de mise à jour
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.sica-quebec.ca";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Page d'accueil mise à jour régulièrement
      priority: 1.0, // Priorité maximale pour la page d'accueil
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly", // Informations sur l'entreprise changent rarement
      priority: 0.8, // Haute priorité pour la page à propos
    },
    {
      url: `${baseUrl}/gestion-immobiliere`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Services peuvent être mis à jour
      priority: 0.9, // Très haute priorité pour les services principaux
    },
    {
      url: `${baseUrl}/entretien-menager`,
      lastModified: new Date(),
      changeFrequency: "monthly", // Services peuvent être mis à jour
      priority: 0.9, // Très haute priorité pour les services principaux
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly", // Informations de contact changent rarement
      priority: 0.7, // Priorité élevée pour la page de contact
    },
  ];
}
