import { Metadata } from "next";
import {
  generateSeoMetadata,
  localBusinessStructuredData,
} from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Gestion Immobilière
// Utilise des mots-clés spécifiques au service et des données structurées pour le référencement local
export const metadata: Metadata = generateSeoMetadata({
  title: "Gestion Immobilière Professionnelle - Services Sica",
  description:
    "Services de gestion immobilière professionnelle : gestion locative, maintenance des biens, suivi des locataires et propriétaires. Votre tranquillité d'esprit, notre priorité.",
  keywords:
    "gestion immobilière, gestion locative, maintenance immobilière, syndic, administration de biens, location, propriétaire, locataire,  gestion locative Québec, compagnie de gestion immobilière à Québec,services gestion immeubles locatifs, gestion syndicat copropriété, ⁠gestion financière immeuble Québec, comptabilité immobilière,comment choisir un gestionnaire immobilier, frais gestion locative Québec, gestion immobilière clé en main, gestion immobilière complète, entretien ménage commercial Québec, nettoyage de bureaux, ⁠compagnie nettoyage copropriété, entretien des communs d’immeubles, ⁠entretien ménage RPA Québec, nettoyage résidence personnes âgées, entretien ménage restaurants Québec, nettoyage commercial restaurant, nettoyage après construction Québec, nettoyage fin de chantier, ⁠Loi 16 carnet d’entretien, entretien copropriété Québec loi,  ⁠service clientèle 24/7 gestion immobilière, gestion immobilière Beauce, immobilier Beauce",
  ogType: "website",
  structuredData: {
    ...localBusinessStructuredData,
    "@type": "Service",
    serviceType: "Gestion Immobilière",
    provider: localBusinessStructuredData,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  },
});

export default function GestionImmobiliereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
