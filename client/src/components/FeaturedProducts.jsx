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

  return (
    <div className="gallery-container">
      <h2>{t('featuredProducts.title', 'Productos Destacados')}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.kva} {t('featuredProducts.kva', 'KVA')}</p>
            <Link to={`/productos/${product.name}`} id="ver-mas-btn">
              {t('featuredProducts.viewMore', 'Ver más')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;