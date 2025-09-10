import { Metadata } from "next";
import { generateSeoMetadata } from "@/components/Seo";

// Métadonnées SEO optimisées pour la page À propos
// Utilise le composant SEO centralisé pour maintenir la cohérence
export const metadata: Metadata = generateSeoMetadata({
  title: "À Propos de Sica - Notre Mission et Nos Valeurs",
  description:
    "Découvrez la mission de Sica : offrir la tranquillité d'esprit aux propriétaires immobiliers grâce à une gestion rigoureuse, humaine et complète de leurs biens immobiliers.",
  keywords:
    "à propos sica, mission, valeurs, gestion immobilière, tranquillité d'esprit, propriétaires,  gestion locative Québec, compagnie de gestion immobilière à Québec,services gestion immeubles locatifs, gestion syndicat copropriété, ⁠gestion financière immeuble Québec, comptabilité immobilière,comment choisir un gestionnaire immobilier, frais gestion locative Québec, gestion immobilière clé en main, gestion immobilière complète, entretien ménage commercial Québec, nettoyage de bureaux, ⁠compagnie nettoyage copropriété, entretien des communs d’immeubles, ⁠entretien ménage RPA Québec, nettoyage résidence personnes âgées, entretien ménage restaurants Québec, nettoyage commercial restaurant, nettoyage après construction Québec, nettoyage fin de chantier, ⁠Loi 16 carnet d’entretien, entretien copropriété Québec loi,  ⁠service clientèle 24/7 gestion immobilière ",
  ogType: "website",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
