import React from 'react';
import "../pages/Descargas.css"
import { FaDownload } from "react-icons/fa";
import ProtectedLink from '../components/ProtectedLink'; 

import { useAuth } from '../context/AuthContext';


const data = [
  {
    modelo: 'LK21B',
    kva: 21,
    kilovatios: 17,
    tipoMotor: 'Diésel',
    dimension: '1970 x 800 x 1075',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK21B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK25B',
    kva: 25,
    kilovatios: 20,
    tipoMotor: 'Diésel',
    dimension: '1970 x 800 x 1075',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK25B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK36B',
    kva: 36,
    kilovatios: 29,
    tipoMotor: 'Diésel',
    dimension: '2170 x 850 x 1075',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK36B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK44B',
    kva: 44,
    kilovatios: 35,
    tipoMotor: 'Diésel',
    dimension: '2170 x 850 x 1075',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK44B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK50B',
    kva: 50,
    kilovatios: 40,
    tipoMotor: 'Diésel',
    dimension: '2270 xx 960 x 1200',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK50B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK72B',
    kva: 72,
    kilovatios: 57,
    tipoMotor: 'Diésel',
    dimension: '2470 x 1010 x 1250',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK72B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK88B',
    kva: 88,
    kilovatios: 70,
    tipoMotor: 'Diésel',
    dimension: '2470 x 1010 x 1250',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK88B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK110B',
    kva: 110,
    kilovatios: 88,
    tipoMotor: 'Diésel',
    dimension: '2770 x 1080 x 1250',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK110B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK150B',
    kva: 150,
    kilovatios: 120,
    tipoMotor: 'Diésel',
    dimension: '3070 x 1080 x 1450',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK150B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK165B',
    kva: 165,
    kilovatios: 132,
    tipoMotor: 'Diésel',
    dimension: '3270 x 1130 x 1650',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK165B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK188B',
    kva: 188,
    kilovatios: 150,
    tipoMotor: 'Diésel',
    dimension: '3270 x 1130 x 1650',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK188B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
    {
    modelo: 'LK250B',
    kva: 250,
    kilovatios: 200,
    tipoMotor: 'Diésel',
    dimension: '3920 x 1180 x 1900',
    descarga: 'Ficha Tecnica',
    descarga2: 'Manual de usuario',
    ficha: 'LK250B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
];

const Descargas = () => {

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>MODELO</th>
            <th className="hide-mobile">KVA</th>
            <th className="hide-mobile">Kilovatios</th>
            <th className="hide-mobile">Tipo de motor</th>
            <th className="hide-mobile">Dimensión</th>
            <th>Descarga</th>
            <th>Descarga</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.modelo}</td>
              <td className="hide-mobile">{item.kva}</td>
              <td className="hide-mobile">{item.kilovatios}</td>
              <td className="hide-mobile">{item.tipoMotor}</td>
              <td className="hide-mobile">{item.dimension}</td>
              <td className="descarga">
                <ProtectedLink href={`/docs/${item.ficha}`}>
                  <FaDownload className="download-icon" />
                  <span className='space'>Ficha técnica</span>
                </ProtectedLink>
              </td>
              <td className="descarga">
                <ProtectedLink href={`/docs/${item.manual}`}>
                  <FaDownload className="download-icon" />
                  <span className='space'>Manual de usuario</span>
                </ProtectedLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Descargas;