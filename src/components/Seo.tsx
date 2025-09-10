import { Metadata } from 'next';

/**
 * Interface pour définir les propriétés SEO d'une page
 * Permet de centraliser et standardiser les métadonnées SEO
 */
export interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: object;
}

/**
 * Fonction utilitaire pour générer les métadonnées SEO complètes
 * Centralise la logique SEO pour éviter la duplication de code
 * 
 * @param seoProps - Propriétés SEO de la page
 * @param baseUrl - URL de base du site (par défaut depuis les variables d'environnement)
 * @returns Objet Metadata compatible avec Next.js App Router
 */
export function generateSeoMetadata(
  seoProps: SeoProps,
  baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://sica-services.fr'
): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    canonicalUrl,
    noIndex = false,
    structuredData
  } = seoProps;

  // Construction du titre complet avec le nom de la marque
  const fullTitle = title.includes('Sica') ? title : `${title} | Sica - Services de Gestion Immobilière et Entretien Ménager`;
  
  // URL canonique par défaut
  const canonical = canonicalUrl || baseUrl;
  
  // URL complète de l'image Open Graph
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  // Construire l'objet "other" séparément pour éviter les problèmes de types avec DeprecatedMetadataFields
  const otherMeta: Record<string, string | number | (string | number)[]> = {
    // Indique que le site est optimisé pour mobile
    'viewport': 'width=device-width, initial-scale=1',
    // Langue principale du contenu
    'content-language': 'fr',
    // Informations sur l'auteur/organisation
    'author': 'Sica Services',
    'publisher': 'Sica Services',
    // Géolocalisation pour les services locaux
    'geo.region': 'FR',
    'geo.placename': 'France',
    // Thème couleur pour les navigateurs mobiles
    'theme-color': '#1f2937', // À adapter selon votre charte graphique
  };

  // Ajout des données structurées si fournies
  if (structuredData) {
    otherMeta['structured-data'] = JSON.stringify(structuredData);
  }

  const metadata: Metadata = {
    // Métadonnées de base
    title: fullTitle,
    description,
    keywords,
    
    // Métadonnées techniques
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical
    },
    
    // Open Graph pour les réseaux sociaux (Facebook, LinkedIn, etc.)
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: canonical,
      siteName: 'Sica Services',
      locale: 'fr_FR',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Sica Services`,
          type: 'image/jpeg',
        }
      ],
    },
    
    // Twitter Card pour un meilleur partage sur Twitter/X
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: '@sica_services', // À remplacer par le vrai handle Twitter si disponible
    },
    
    // Métadonnées supplémentaires pour les moteurs de recherche
    other: otherMeta
  };

  return metadata;
}

/**
 * Données structurées par défaut pour l'organisation
 * Améliore la compréhension du site par les moteurs de recherche
 */
export const defaultOrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sica Services",
  "description": "Services professionnels de gestion immobilière et d'entretien ménager en France",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sica-services.fr",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sica-services.fr"}/images/logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-XX-XX-XX-XX", // À remplacer par le vrai numéro
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "France" // À préciser selon la localisation
  },
  "sameAs": [
    // À compléter avec les vrais profils sociaux
    "https://www.facebook.com/sica-services",
    "https://www.linkedin.com/company/sica-services"
  ]
};

/**
 * Données structurées pour les services locaux
 * Optimise le référencement local
 */
export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sica Services",
  "description": "Services de gestion immobilière et entretien ménager",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sica-services.fr",
  "telephone": "+33-1-XX-XX-XX-XX", // À remplacer
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "openingHours": "Mo-Fr 09:00-18:00", // À adapter selon les horaires réels
  "serviceArea": {
    "@type": "Country",
    "name": "France"
  }
};
