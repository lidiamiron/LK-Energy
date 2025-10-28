import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { useTranslation } from "react-i18next";
import "../pages/Productos.css";
import SEO from '../components/SEO';

import generador1 from "../assets/generador1.png";
import generador2 from "../assets/generador1.png";
import generador3 from "../assets/generador1.png";
import generador4 from "../assets/generador1.png";
import generador5 from "../assets/generador1.png";
import generador6 from "../assets/generador1.png";
import generador7 from "../assets/generador1.png";
import generador8 from "../assets/generador1.png";

const products = [
  { name: "LK21B", power: "21kVA", powerValue: 21, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador1, enclosure: "Closed"  },
  { name: "LK25B", power: "25kVA", powerValue: 25, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador2, enclosure: "Closed" },
  { name: "LK36B", power: "36kVA", powerValue: 36, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador3, enclosure: "Closed"  },
  { name: "LK44B", power: "44kVA", powerValue: 44, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador4, enclosure: "Closed" },
  { name: "LK50B", power: "50kVA", powerValue: 50, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador5, enclosure: "Closed"  },
  { name: "LK72B", power: "72kVA", powerValue: 72, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador6, enclosure: "Closed" },
  { name: "LK88B", power: "88kVA", powerValue: 88, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador7, enclosure: "Closed"  },
  { name: "LK110B", power: "110kVA", powerValue: 110, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador8, enclosure: "Closed" },
  { name: "LK150B", power: "150kVA", powerValue: 150, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador8, enclosure: "Closed"  },
  { name: "LK165B", power: "165kVA", powerValue: 165, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador8, enclosure: "Closed" },
  { name: "LK188B", power: "188kVA", powerValue: 188, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador8, enclosure: "Closed"  },
  { name: "LK250B", power: "250kVA", powerValue: 250, type: "Trifásico", fuel: "Diesel", frequency: "50", voltage: ["380/220V", "400/230V", "415/240V"], phase: "Three", image: generador8, enclosure: "Closed" },
];

function ProductGrid() {
  const { t } = useTranslation();
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedFrequency, setSelectedFrequency] = useState("All");
  const [selectedVoltage, setSelectedVoltage] = useState("All");
  const [selectedPhase, setSelectedPhase] = useState("All");
  const [selectedPower, setSelectedPower] = useState("All");
  const [applyFilters, setApplyFilters] = useState(false);
  const [selectedEnclosure, setSelectedEnclosure] = useState("All");


  const handleSearch = () => setApplyFilters(true);

const filteredProducts = products.filter((product) => {
  if (!applyFilters) return true;

  const matchesEnclosure = selectedEnclosure === "All" || product.enclosure === selectedEnclosure;
  const matchesFrequency = selectedFrequency === "All" || product.frequency === selectedFrequency;
  const matchesVoltage = selectedVoltage === "All" || product.voltage.includes(selectedVoltage);
  const matchesPhase = selectedPhase === "All" || product.phase === selectedPhase;
  const matchesPower = selectedPower === "All" || product.powerValue === parseInt(selectedPower);

  return matchesEnclosure && matchesFrequency && matchesVoltage && matchesPhase && matchesPower;
});

  return (
    <>
      <SEO 
        title="Catálogo de Generadores Industriales | LK Energy | 21-250 KVA"
        description="Catálogo completo de generadores diésel trifásicos LK Energy. Desde 21 KVA hasta 250 KVA. Filtra por potencia, voltaje y características técnicas."
        keywords="generadores industriales, generadores diésel, grupos electrógenos, LK Energy, generadores trifásicos, 21 KVA, 25 KVA, 36 KVA, 44 KVA, 50 KVA, 72 KVA, 88 KVA, 110 KVA, 150 KVA, 165 KVA, 188 KVA, 250 KVA"
        canonical="/productos"
      />

      <div className="product-wrapper">
        <div className="product-container">
          <h2>{t('products.title', 'GENERADORES INDUSTRIALES')}</h2>
          <p className="product-description">
            {t('products.description', 'Especializados en motores de alta gama, generadores de combustible alternativo y diésel. Nuestros motores entran al mercado a competir gracias a su eficiencia y prestaciones de alto rendimiento.')}
          </p>

          {/* FILTROS - Mismo diseño original */}
          <div className="filter-panel">
            <div className="filter-group">
  <span>{t('products.filters.enclosure', 'Modelo de caseta')}:</span>
  <button
    onClick={() => setSelectedEnclosure("Open")}
    className={selectedEnclosure === "Open" ? "active" : ""}
  >
    {t('products.filters.open', 'Abierto')}
  </button>
  <button
    onClick={() => setSelectedEnclosure("Closed")}
    className={selectedEnclosure === "Closed" ? "active" : ""}
  >
    {t('products.filters.closed', 'Cerrado')}
  </button>
  <button
    onClick={() => setSelectedEnclosure("All")}
    className={selectedEnclosure === "All" ? "active" : ""}
  >
    {t('products.filters.all', 'Todos')}
  </button>
</div>

            <div className="filter-group">
              <span>{t('products.filters.frequency', 'Frecuencia')}:</span>
              <button onClick={() => setSelectedFrequency("50")} className={selectedFrequency === "50" ? "active" : ""}>
                50 {t('products.filters.hz', 'Hz')}
              </button>
              <button onClick={() => setSelectedFrequency("60")} className={selectedFrequency === "60" ? "active" : ""}>
                60 {t('products.filters.hz', 'Hz')}
              </button>
              <button onClick={() => setSelectedFrequency("All")} className={selectedFrequency === "All" ? "active" : ""}>
                {t('products.filters.all', 'Todas')}
              </button>
            </div>

            <div className="filter-group">
              <label>{t('products.filters.voltage', 'Voltaje')}:</label>
              <select value={selectedVoltage} onChange={(e) => setSelectedVoltage(e.target.value)}>
                <option value="All">{t('products.filters.all', 'Todos')}</option>
                <option value="380/220V">380/220V</option>
                <option value="400/230V">400/230V</option>
                <option value="415/240V">415/240V</option>
              </select>
            </div>

            <div className="filter-group">
              <span>{t('products.filters.phase', 'Fase')}:</span>
              <button onClick={() => setSelectedPhase("Single")} className={selectedPhase === "Single" ? "active" : ""}>
                {t('products.filters.singlePhase', 'Monofásico')}
              </button>
              <button onClick={() => setSelectedPhase("Three")} className={selectedPhase === "Three" ? "active" : ""}>
                {t('products.filters.threePhase', 'Trifásico')}
              </button>
              <button onClick={() => setSelectedPhase("All")} className={selectedPhase === "All" ? "active" : ""}>
                {t('products.filters.all', 'Todas')}
              </button>
            </div>

            <div className="filter-group">
              <label>{t('products.filters.power', 'Potencia')}:</label>
              <select value={selectedPower} onChange={(e) => setSelectedPower(e.target.value)}>
                <option value="All">{t('products.filters.all', 'Todas')}</option>
                {[21, 25, 36, 44, 50, 72, 88, 110, 150, 165, 188, 250].map((kva) => (
                  <option key={kva} value={kva}>{kva} kVA</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <button onClick={handleSearch} className="search-button">
                {t('products.filters.search', 'Buscar')}
              </button>
            </div>
          </div>

          {/* PRODUCTOS - Mismo diseño original */}
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <Link to={`/productos/${product.name}`} className="product-card" key={index}>
                <img src={product.image} alt={`Generador ${product.name} - ${product.power} ${product.type}`} className="product-image" />
                <div className="product-power">
                  ⚡ {product.power} - <span>{t(`product.values.${product.type.toLowerCase()}`, product.type)}</span>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-subtitle">{t('home.titleLine1', 'GRUPOS')}<br /> {t('home.titleLine2', 'ELECTROGENOS')}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductGrid;