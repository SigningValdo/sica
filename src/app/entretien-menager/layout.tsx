import { Metadata } from "next";
import { generateSeoMetadata, localBusinessStructuredData } from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Entretien Ménager
// Utilise des mots-clés spécifiques au service de nettoyage et des données structurées
export const metadata: Metadata = generateSeoMetadata({
  title: "Services d'Entretien Ménager Professionnel - Sica",
  description: "Services d'entretien ménager professionnel : nettoyage de bureaux, entretien régulier, maintenance des espaces. Solutions personnalisées pour particuliers et entreprises.",
  keywords: "entretien ménager, nettoyage professionnel, femme de ménage, entretien bureaux, nettoyage entreprise, maintenance, hygiène",
  ogType: "website",
  structuredData: {
    ...localBusinessStructuredData,
    "@type": "Service",
    "serviceType": "Entretien Ménager",
    "provider": localBusinessStructuredData,
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  }
});

export default function EntretienMenagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
