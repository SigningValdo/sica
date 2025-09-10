import { Metadata } from "next";
import {
  generateSeoMetadata,
  localBusinessStructuredData,
} from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Entretien Ménager
// Utilise des mots-clés spécifiques au service de nettoyage et des données structurées
export const metadata: Metadata = generateSeoMetadata({
  title: "Services d'Entretien Ménager Professionnel - Sica",
  description:
    "Services d'entretien ménager professionnel : nettoyage de bureaux, entretien régulier, maintenance des espaces. Solutions personnalisées pour particuliers et entreprises.",
  keywords:
    "entretien ménager, nettoyage professionnel, femme de ménage, entretien bureaux, nettoyage entreprise, maintenance, hygiène,  gestion locative Québec, compagnie de gestion immobilière à Québec,services gestion immeubles locatifs, gestion syndicat copropriété, ⁠gestion financière immeuble Québec, comptabilité immobilière,comment choisir un gestionnaire immobilier, frais gestion locative Québec, gestion immobilière clé en main, gestion immobilière complète, entretien ménage commercial Québec, nettoyage de bureaux, ⁠compagnie nettoyage copropriété, entretien des communs d’immeubles, ⁠entretien ménage RPA Québec, nettoyage résidence personnes âgées, entretien ménage restaurants Québec, nettoyage commercial restaurant, nettoyage après construction Québec, nettoyage fin de chantier, ⁠Loi 16 carnet d’entretien, entretien copropriété Québec loi,  ⁠service clientèle 24/7 gestion immobilière",
  ogType: "website",
  structuredData: {
    ...localBusinessStructuredData,
    "@type": "Service",
    serviceType: "Entretien Ménager",
    provider: localBusinessStructuredData,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  },
});

export default function EntretienMenagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
