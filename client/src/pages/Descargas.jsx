import React from 'react';
import "../pages/Descargas.css"
import { FaDownload } from "react-icons/fa";


const data = [
  {
    modelo: 'Generador X1',
    kva: 100,
    kilovatios: 80,
    tipoMotor: 'Diésel',
    dimension: '2.5m x 1.2m',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
  },
  {
    modelo: 'Generador Y2',
    kva: 150,
    kilovatios: 120,
    tipoMotor: 'Gasolina',
    dimension: '3m x 1.5m',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
  },
  {
    modelo: 'Generador Z3',
    kva: 200,
    kilovatios: 160,
    tipoMotor: 'Eléctrico',
    dimension: '3.5m x 1.8m',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
  },
  {
    modelo: 'Generador Z3',
    kva: 200,
    kilovatios: 160,
    tipoMotor: 'Eléctrico',
    dimension: '3.5m x 1.8m',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
  },
  {
    modelo: 'Generador Z3',
    kva: 200,
    kilovatios: 160,
    tipoMotor: 'Eléctrico',
    dimension: '3.5m x 1.8m',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
  },
];

const Descargas = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>MODELO</th>
            <th>KVA</th>
            <th>Kilovatios</th>
            <th>Tipo de motor</th>
            <th>Dimensión</th>
            <th>Descarga</th>
            <th>Descarga</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.modelo}</td>
              <td>{item.kva}</td>
              <td>{item.kilovatios}</td>
              <td>{item.tipoMotor}</td>
              <td>{item.dimension}</td>
              <td className='descarga'><a href=""><FaDownload /><span className='space'>{item.descarga}</span></a></td>
              <td className='descarga'><a href=""><FaDownload /><span className='space'>{item.descarga2}</span></a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Descargas;
