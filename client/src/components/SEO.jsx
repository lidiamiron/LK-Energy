// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "LK Energy - Generadores de Energía y Soluciones Eléctricas",
  description = "LK Energy - Fabricantes de generadores eléctricos LK21B, LK25B, LK36B, LK44B, LK50B, LK72B, LK88B, LK110B, LK150B, LK165B, LK188B, LK250B. Calidad y eficiencia energética.",
  keywords = "generadores eléctricos, energía, LK Energy, generadores LK",
  canonical = "",
  ogImage = "/og-image.jpg",
  ogType = "website"
}) => {
  const siteUrl = "https://lkenergy.com";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Meta Tags Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="LK Energy" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LK Energy",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.svg`,
          "description": description,
          "sameAs": []
        })}
      </script>
    </Helmet>
  );
};

export default SEO;