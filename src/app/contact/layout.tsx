import { Metadata } from "next";
import { generateSeoMetadata, localBusinessStructuredData } from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Contact
// Inclut des données structurées pour améliorer la visibilité dans les résultats de recherche locaux
export const metadata: Metadata = generateSeoMetadata({
  title: "Contactez Sica - Devis Gratuit pour Gestion Immobilière et Entretien",
  description: "Contactez Sica pour un devis gratuit et personnalisé. Services de gestion immobilière et entretien ménager professionnel. Réponse rapide garantie.",
  keywords: "contact sica, devis gratuit, gestion immobilière contact, entretien ménager devis, formulaire contact",
  ogType: "website",
  structuredData: localBusinessStructuredData
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
