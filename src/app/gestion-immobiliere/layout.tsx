import { Metadata } from "next";
import { generateSeoMetadata, localBusinessStructuredData } from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Gestion Immobilière
// Utilise des mots-clés spécifiques au service et des données structurées pour le référencement local
export const metadata: Metadata = generateSeoMetadata({
  title: "Gestion Immobilière Professionnelle - Services Sica",
  description: "Services de gestion immobilière professionnelle : gestion locative, maintenance des biens, suivi des locataires et propriétaires. Votre tranquillité d'esprit, notre priorité.",
  keywords: "gestion immobilière, gestion locative, maintenance immobilière, syndic, administration de biens, location, propriétaire, locataire",
  ogType: "website",
  structuredData: {
    ...localBusinessStructuredData,
    "@type": "Service",
    "serviceType": "Gestion Immobilière",
    "provider": localBusinessStructuredData,
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  }
});

export default function GestionImmobiliereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
