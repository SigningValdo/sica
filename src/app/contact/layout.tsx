import { Metadata } from "next";
import {
  generateSeoMetadata,
  localBusinessStructuredData,
} from "@/components/Seo";

// Métadonnées SEO optimisées pour la page Contact
// Inclut des données structurées pour améliorer la visibilité dans les résultats de recherche locaux
export const metadata: Metadata = generateSeoMetadata({
  title: "Contactez Sica - Devis Gratuit pour Gestion Immobilière et Entretien",
  description:
    "Contactez Sica pour un devis gratuit et personnalisé. Services de gestion immobilière et entretien ménager professionnel. Réponse rapide garantie.",
  keywords:
    "contact sica, devis gratuit, gestion immobilière contact, entretien ménager devis, formulaire contact,  gestion locative Québec, compagnie de gestion immobilière à Québec,services gestion immeubles locatifs, gestion syndicat copropriété, ⁠gestion financière immeuble Québec, comptabilité immobilière,comment choisir un gestionnaire immobilier, frais gestion locative Québec, gestion immobilière clé en main, gestion immobilière complète, entretien ménage commercial Québec, nettoyage de bureaux, ⁠compagnie nettoyage copropriété, entretien des communs d’immeubles, ⁠entretien ménage RPA Québec, nettoyage résidence personnes âgées, entretien ménage restaurants Québec, nettoyage commercial restaurant, nettoyage après construction Québec, nettoyage fin de chantier, ⁠Loi 16 carnet d’entretien, entretien copropriété Québec loi,  ⁠service clientèle 24/7 gestion immobilière, gestion immobilière Beauce, immobilier Beauce ",
  ogType: "website",
  structuredData: localBusinessStructuredData,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
