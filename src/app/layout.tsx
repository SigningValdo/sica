import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateSeoMetadata, defaultOrganizationStructuredData } from "@/components/Seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées SEO optimisées pour la page d'accueil
// Utilise le composant SEO centralisé pour maintenir la cohérence
export const metadata: Metadata = generateSeoMetadata({
  title: "Sica - Services de Gestion Immobilière et Entretien Ménager",
  description: "Votre tranquillité d'esprit, notre priorité. Services professionnels de gestion immobilière et d'entretien ménager en France. Contactez-nous pour un devis personnalisé.",
  keywords: "gestion immobilière, entretien ménager, services professionnels, France, maintenance, nettoyage, gestion locative",
  ogType: "website",
  structuredData: defaultOrganizationStructuredData
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Correction de la langue pour le SEO français
    <html lang="fr">
      <head>
        {/* Données structurées pour améliorer le référencement */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultOrganizationStructuredData),
          }}
        />
        {/* Préconnexion aux domaines externes pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Structure sémantique améliorée pour l'accessibilité et le SEO */}
        <header className="fixed top-0 z-40 left-0 right-0">
          <Header />
        </header>
        <main className="mt-[80px] lg:mt-[140px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
