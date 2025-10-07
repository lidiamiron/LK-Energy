import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./FeaturedProducts.css";
import generatormain from "../assets/generador1.png";
import generador1 from "../assets/generador1.png";
import generador2 from "../assets/generador1.png";
import generador3 from "../assets/generador1.png";
import generador4 from "../assets/generador1.png";
import generador5 from "../assets/generador1.png";

const products = [
  {
    id: 1,
    name: "LK25B",
    kva:  25,
    image: generatormain,
  },
  {
    id: 2,
    name: "LK44B",
    kva: 44,
    image: generador1,
  },
  {
    id: 3,
    name: "LK72B",
    kva: 72,
    image: generador2,
  },
  {
    id: 4,
    name: "LK110B",
    kva: 110,
    image: generador3,
  },
  {
    id: 5,
    name: "LK165B",
    kva: 165,
    image: generador4,
  },
  {
    id: 6,
    name: "LK250B",
    kva: 250,
    image: generador5,
  },
];

const FeaturedProducts = () => {
  const { t } = useTranslation();

  // Schema.org markup para Product Collection - SOLO SE AÑADE ESTO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Productos Destacados - Generadores Eléctricos LK Energy",
    "description": "Catálogo de generadores eléctricos LK Energy: LK25B, LK44B, LK72B, LK110B, LK165B, LK250B. Soluciones energéticas para industria, construcción y emergencias.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Generador ${product.name}`,
        "model": product.name,
        "description": `Generador eléctrico ${product.name} de ${product.kva} KVA - LK Energy`,
        "url": `https://lkenergy.com/productos/${product.name}`,
        "brand": {
          "@type": "Brand",
          "name": "LK Energy"
        }
      }
    }))
  };

  return (
    <div className="gallery-container">
      {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      <h2>{t('featuredProducts.title', 'Productos Destacados')}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img 
              src={product.image} 
              alt={`Generador ${product.name} - ${product.kva} KVA - LK Energy`} 
              loading="lazy"
            />
            <h3>{product.name}</h3>
            <p>{product.kva} {t('featuredProducts.kva', 'KVA')}</p>
            <Link 
              to={`/productos/${product.name}`} 
              id="ver-mas-btn"
              aria-label={`Ver detalles del generador ${product.name} de ${product.kva} KVA`}
            >
              {t('featuredProducts.viewMore', 'Ver más')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;