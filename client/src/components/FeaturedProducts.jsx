import React from "react";
import "./FeaturedProducts.css";
import generatormain from "../assets/generator-main.png";
import generador1 from "../assets/generator-main.png";
import generador2 from "../assets/generator-main.png";
import generador3 from "../assets/generator-main.png";
import generador4 from "../assets/generator-main.png";
import generador5 from "../assets/generator-main.png";

const products = [
  {
    id: 1,
    name: "Generador Diesel 5000",
    kva: 5,
    image: generatormain,
  },
  {
    id: 2,
    name: "Generador Eléctrico Pro",
    kva: 10,
    image: generador1,
  },
  {
    id: 3,
    name: "Generador Industrial Max",
    kva: 15,
    image: generador2,
  },
  {
    id: 4,
    name: "Generador Portátil Eco",
    kva: 3.5,
    image: generador3,
  },
  {
    id: 5,
    name: "Generador Ultra Silencioso",
    kva: 7.5,
    image: generador4,
  },
  {
    id: 6,
    name: "Generador Heavy Duty",
    kva: 20,
    image: generador5,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="gallery-container">
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.kva} KVA</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;