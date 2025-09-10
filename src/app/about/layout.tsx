import { Metadata } from "next";
import { generateSeoMetadata } from "@/components/Seo";

// Métadonnées SEO optimisées pour la page À propos
// Utilise le composant SEO centralisé pour maintenir la cohérence
export const metadata: Metadata = generateSeoMetadata({
  title: "À Propos de Sica - Notre Mission et Nos Valeurs",
  description: "Découvrez la mission de Sica : offrir la tranquillité d'esprit aux propriétaires immobiliers grâce à une gestion rigoureuse, humaine et complète de leurs biens immobiliers.",
  keywords: "à propos sica, mission, valeurs, gestion immobilière, tranquillité d'esprit, propriétaires",
  ogType: "website"
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
