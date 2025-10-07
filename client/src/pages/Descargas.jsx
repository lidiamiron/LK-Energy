import React from 'react';
import { useTranslation } from 'react-i18next';
import "../pages/Descargas.css"
import { FaDownload } from "react-icons/fa";
import ProtectedLink from '../components/ProtectedLink'; 
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

const data = [
  {
    modelo: 'LK21B',
    kva: 21,
    kilovatios: 17,
    tipoMotor: 'Diésel',
    dimension: '1970 x 800 x 1075',
    ficha: 'LK21B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK25B',
    kva: 25,
    kilovatios: 20,
    tipoMotor: 'Diésel',
    dimension: '1970 x 800 x 1075',
    ficha: 'LK25B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK36B',
    kva: 36,
    kilovatios: 29,
    tipoMotor: 'Diésel',
    dimension: '2170 x 850 x 1075',
    ficha: 'LK36B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK44B',
    kva: 44,
    kilovatios: 35,
    tipoMotor: 'Diésel',
    dimension: '2170 x 850 x 1075',
    ficha: 'LK44B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK50B',
    kva: 50,
    kilovatios: 40,
    tipoMotor: 'Diésel',
    dimension: '2270 xx 960 x 1200',
    ficha: 'LK50B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK72B',
    kva: 72,
    kilovatios: 57,
    tipoMotor: 'Diésel',
    dimension: '2470 x 1010 x 1250',
    ficha: 'LK72B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK88B',
    kva: 88,
    kilovatios: 70,
    tipoMotor: 'Diésel',
    dimension: '2470 x 1010 x 1250',
    ficha: 'LK88B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK110B',
    kva: 110,
    kilovatios: 88,
    tipoMotor: 'Diésel',
    dimension: '2770 x 1080 x 1250',
    ficha: 'LK110B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK150B',
    kva: 150,
    kilovatios: 120,
    tipoMotor: 'Diésel',
    dimension: '3070 x 1080 x 1450',
    ficha: 'LK150B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK165B',
    kva: 165,
    kilovatios: 132,
    tipoMotor: 'Diésel',
    dimension: '3270 x 1130 x 1650',
    ficha: 'LK165B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK188B',
    kva: 188,
    kilovatios: 150,
    tipoMotor: 'Diésel',
    dimension: '3270 x 1130 x 1650',
    ficha: 'LK188B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
  {
    modelo: 'LK250B',
    kva: 250,
    kilovatios: 200,
    tipoMotor: 'Diésel',
    dimension: '3920 x 1180 x 1900',
    ficha: 'LK250B.pdf',
    manual: 'MANUAL USUARIO ESP LK.pdf',
  },
];

const Descargas = () => {
  const { t } = useTranslation();

  // SOLO SE AÑADE: Schema.org para CollectionPage
  const downloadsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Descargas - Documentación Técnica LK Energy",
    "description": "Descarga fichas técnicas y manuales de usuario de generadores eléctricos LK Energy: LK21B, LK25B, LK36B, LK44B, LK50B, LK72B, LK88B, LK110B, LK150B, LK165B, LK188B, LK250B",
    "url": "https://lkenergy.com/descargas",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": data.length,
      "itemListElement": data.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": `Generador ${item.modelo}`,
          "model": item.modelo,
          "description": `Generador eléctrico ${item.modelo} de ${item.kva} KVA - Ficha técnica y manual de usuario`,
          "manufacturer": {
            "@type": "Organization",
            "name": "LK Energy"
          },
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "KVA",
              "value": item.kva.toString()
            },
            {
              "@type": "PropertyValue", 
              "name": "Kilovatios",
              "value": item.kilovatios.toString()
            },
            {
              "@type": "PropertyValue",
              "name": "Tipo de Motor",
              "value": item.tipoMotor
            },
            {
              "@type": "PropertyValue",
              "name": "Dimensiones",
              "value": item.dimension
            }
          ]
        }
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Descargas - Documentación Técnica Generadores LK Energy"
        description="Descarga fichas técnicas y manuales de usuario de todos los modelos de generadores LK Energy: LK21B, LK25B, LK36B, LK44B, LK50B, LK72B, LK88B, LK110B, LK150B, LK165B, LK188B, LK250B"
        keywords="descargas LK Energy, fichas técnicas generadores, manuales usuario, documentación técnica, generadores eléctricos PDF"
        canonical="/descargas"
        ogType="website"
      />

      <div className="table-container">
        {/* SOLO SE AÑADE ESTE SCRIPT - No afecta diseño */}
        <script type="application/ld+json">
          {JSON.stringify(downloadsSchema)}
        </script>

        <table className="custom-table" role="grid" aria-label="Tabla de descargas de documentación técnica">
          <thead>
            <tr>
              <th scope="col">{t('downloads.tableHeaders.model')}</th>
              <th scope="col" className="hide-mobile">{t('downloads.tableHeaders.kva')}</th>
              <th scope="col" className="hide-mobile">{t('downloads.tableHeaders.kilowatts')}</th>
              <th scope="col" className="hide-mobile">{t('downloads.tableHeaders.engineType')}</th>
              <th scope="col" className="hide-mobile">{t('downloads.tableHeaders.dimension')}</th>
              <th scope="col">{t('downloads.tableHeaders.download')}</th>
              <th scope="col">{t('downloads.tableHeaders.download')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} itemScope itemType="https://schema.org/Product">
                <td itemProp="model">{item.modelo}</td>
                <td className="hide-mobile" itemProp="additionalProperty">{item.kva}</td>
                <td className="hide-mobile" itemProp="additionalProperty">{item.kilovatios}</td>
                <td className="hide-mobile" itemProp="additionalProperty">{t('downloads.engineType')}</td>
                <td className="hide-mobile" itemProp="additionalProperty">{item.dimension}</td>
                <td className="descarga">
                  <ProtectedLink 
                    href={`/docs/${item.ficha}`}
                    aria-label={`Descargar ficha técnica del generador ${item.modelo}`}
                  >
                    <FaDownload className="download-icon" aria-hidden="true" />
                    <span className='space'>{t('downloads.documents.technicalSheet')}</span>
                  </ProtectedLink>
                </td>
                <td className="descarga">
                  <ProtectedLink 
                    href={`/docs/${item.manual}`}
                    aria-label={`Descargar manual de usuario del generador ${item.modelo}`}
                  >
                    <FaDownload className="download-icon" aria-hidden="true" />
                    <span className='space'>{t('downloads.documents.userManual')}</span>
                  </ProtectedLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Descargas;