import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- AÑADIDO
import "../pages/Productos.css";

import generador1 from "../assets/generador1.png";
import generador2 from "../assets/generador2.png";
import generador3 from "../assets/generador3.png";
import generador4 from "../assets/generador4.png";
import generador5 from "../assets/generador5.png";
import generador6 from "../assets/generador6.png";
import generador7 from "../assets/generador7.png";
import generador8 from "../assets/generador8.png";

const products = [
  { name: "LK21B", power: "21kVA", powerValue: 21, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador1 },
  { name: "LK25B", power: "25kVA", powerValue: 25, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador2 },
  { name: "LK36B", power: "36kVA", powerValue: 36, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador3 },
  { name: "LK44B", power: "44kVA", powerValue: 44, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador4 },
  { name: "LK50B", power: "50kVA", powerValue: 50, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador5 },
  { name: "LK72B", power: "72kVA", powerValue: 72, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador6 },
  { name: "LK88B", power: "88kVA", powerValue: 88, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador7 },
  { name: "LK110B", power: "110kVA", powerValue: 110, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador8 },
  { name: "LK150B", power: "150kVA", powerValue: 150, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador8 },
  { name: "LK165B", power: "165kVA", powerValue: 165, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador8 },
  { name: "LK188B", power: "188kVA", powerValue: 188, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador8 },
  { name: "LK250B", power: "250kVA", powerValue: 250, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage:  ["380/220V", "400/230V", "415/240V" ], phase: "Three", image: generador8 },
];

function ProductGrid() {
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedFrequency, setSelectedFrequency] = useState("All");
  const [selectedVoltage, setSelectedVoltage] = useState("All");
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [selectedPower, setSelectedPower] = useState("All");
  const [applyFilters, setApplyFilters] = useState(false);

  const handleSearch = () => setApplyFilters(true);

  const filteredProducts = products.filter((product) => {
    if (!applyFilters) return true;

    const matchesFuel = selectedFuel === "All" || product.fuel === selectedFuel;
    const matchesFrequency = selectedFrequency === "All" || product.frequency === selectedFrequency;
    const matchesVoltage = selectedVoltage === "All" || product.voltage.includes(selectedVoltage);
    const matchesPhase = selectedPhase === "All" || product.phase === selectedPhase;
    const matchesPower = selectedPower === "All" || product.powerValue === parseInt(selectedPower);

    return matchesFuel && matchesFrequency && matchesVoltage && matchesPhase && matchesPower;
  });

  return (
    <div className="product-wrapper">
      <div className="product-container">
        <h2>GENERADORES INDUSTRIALES</h2>
        <p className="product-description">
          Especializados en motores de alta gama, generadores de combustible alternativo y diésel. Nuestros motores entran al mercado a competir gracias a su eficiencia y prestaciones de alto rendimiento.
        </p>

        {/* FILTROS */}
        <div className="filter-panel">
          <div className="filter-group">
            <span>Combustible:</span>
            <button onClick={() => setSelectedFuel("Diesel")} className={selectedFuel === "Diesel" ? "active" : ""}>Diesel</button>
            <button onClick={() => setSelectedFuel("Gas")} className={selectedFuel === "Gas" ? "active" : ""}>Gas</button>
            <button onClick={() => setSelectedFuel("All")} className={selectedFuel === "All" ? "active" : ""}>Todos</button>
          </div>

          <div className="filter-group">
            <span>Frecuencia:</span>
            <button onClick={() => setSelectedFrequency("50")} className={selectedFrequency === "50" ? "active" : ""}>50 Hz</button>
            <button onClick={() => setSelectedFrequency("60")} className={selectedFrequency === "60" ? "active" : ""}>60 Hz</button>
            <button onClick={() => setSelectedFrequency("All")} className={selectedFrequency === "All" ? "active" : ""}>Todas</button>
          </div>

          <div className="filter-group">
            <label>Voltaje:</label>
            <select value={selectedVoltage} onChange={(e) => setSelectedVoltage(e.target.value)}>
              <option value="All">Todos</option>
              <option value="380/220V">380/220V</option>
              <option value="400/230V">400/230V</option>
              <option value="415/240V">415/240V</option>
            </select>
          </div>

          <div className="filter-group">
            <span>Fase:</span>
            <button onClick={() => setSelectedPhase("Single")} className={selectedPhase === "Single" ? "active" : ""}>Monofásico</button>
            <button onClick={() => setSelectedPhase("Three")} className={selectedPhase === "Three" ? "active" : ""}>Trifásico</button>
            <button onClick={() => setSelectedPhase("All")} className={selectedPhase === "All" ? "active" : ""}>Todas</button>
          </div>

          <div className="filter-group">
            <label>Potencia:</label>
            <select value={selectedPower} onChange={(e) => setSelectedPower(e.target.value)}>
              <option value="All">Todas</option>
              {[21, 25, 36, 44, 50, 72, 88, 110, 150, 165, 188, 250].map((kva) => (
                <option key={kva} value={kva}>{kva} kVA</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <button onClick={handleSearch} className="search-button">Buscar</button>
          </div>
        </div>

        {/* PRODUCTOS */}
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <Link to={`/productos/${product.name}`} className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-power">
                ⚡ {product.power} - <span>{product.type}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-subtitle">GRUPOS<br /> ELECTROGENOS</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
