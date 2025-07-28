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
    name: "LK21B",
    power: "21kVA",
    type: "Trifásico",
    image: generador1,
  },
  {
    name: "LK25B",
    power: "25kVA",
    type: "Trifásico",
    image: generador2,
  },
  {
    name: "LK36B",
    power: "36kVA",
    type: "Trifásico",
    image: generador3,
  },
  {
    name: "LK44B",
    power: "44kVA",
    type: "Trifásico",
    image: generador4,
  },
  {
    name: "LK50B",
    power: "50kVA",
    type: "Trifásico",
    image: generador5,
  },
  {
    name: "LK72B",
    power: "72kVA",
    type: "Trifásico",
    image: generador6,
  },
  {
    name: "LK88B",
    power: "88kVA",
    type: "Trifásico",
    image: generador7,
  },
  {
    name: "LK110B",
    power: "110kVA",
    type: "Trifásico",
    image: generador8,
  },
   {
    name: "LK150B",
    power: "150kVA",
    type: "Trifásico",
    image: generador8,
  },
   {
    name: "LK165B",
    power: "165kVA",
    type: "Trifásico",
    image: generador8,
  },
   {
    name: "LK188B",
    power: "188kVA",
    type: "Trifásico",
    image: generador8,
  },
   {
    name: "LK250B",
    power: "250kVA",
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
