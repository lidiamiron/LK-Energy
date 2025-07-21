import generador1 from '../assets/generador1.png';
import generador2 from '../assets/generador2.png';
import generador3 from '../assets/generador3.png';
import generador4 from '../assets/generador4.png';
import generador5 from '../assets/generador5.png';
import generador6 from '../assets/generador6.png';
import generador7 from '../assets/generador7.png';
import generador8 from '../assets/generador8.png';
import "../pages/Productos.css"

const products = [
  {
    name: "LK25147",
    power: "15kW",
    type: "Trifásico",
    image: generador1,
  },
  {
    name: "LK25147",
    power: "18kW",
    type: "Trifásico",
    image: generador2,
  },
  {
    name: "LK25147",
    power: "26kW",
    type: "Trifásico",
    image: generador3,
  },
  {
    name: "LK25147",
    power: "32kW",
    type: "Trifásico",
    image: generador4,
  },
  {
    name: "LK25147",
    power: "36kW",
    type: "Trifásico",
    image: generador5,
  },
  {
    name: "LK25147",
    power: "52kW",
    type: "Trifásico",
    image: generador6,
  },
  {
    name: "LK25147",
    power: "64kW",
    type: "Trifásico",
    image: generador7,
  },
  {
    name: "LK25147",
    power: "80kW",
    type: "Trifásico",
    image: generador8,
  },
];

function ProductGrid() {
  return (
    <div className="product-wrapper">
    <div className="product-container">
      <h2>GENERADORES INDUSTRIALES</h2>
      <p className="product-description">
     Especializados en motores de alta gama, generadores de combustible alternativo y diésel. Nuestros motores entran al mercado a competir gracias a su eficiencia y prestaciones de alto rendimiento.
      </p>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-power">
              ⚡ {product.power} - <span>{product.type}</span>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-subtitle">GENERADORES INDUSTRIALES</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ProductGrid;
