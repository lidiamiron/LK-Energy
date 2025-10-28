import React from 'react';
import { useTranslation } from 'react-i18next';
import "../pages/Descargas.css";
import { FaDownload } from "react-icons/fa";
import ProtectedLink from '../components/ProtectedLink';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

const data = [
  { modelo: 'LK21B',  espKva: 21,  espKw: 17,  prpKva: 19,  prpKw: 15,  baudouin: '4M06G20/5',  alternador: 'LK184E', ficha: 'LK21B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK25B',  espKva: 25,  espKw: 20,  prpKva: 23,  prpKw: 18,  baudouin: '4M06G25/5',  alternador: 'LK184E', ficha: 'LK25B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK36B',  espKva: 36,  espKw: 29,  prpKva: 33,  prpKw: 26,  baudouin: '4M06G35/5',  alternador: 'LK184H', ficha: 'LK36B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK44B',  espKva: 44,  espKw: 35,  prpKva: 40,  prpKw: 32,  baudouin: '4M06G44/5',  alternador: 'LK184J', ficha: 'LK44B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK50B',  espKva: 50,  espKw: 40,  prpKva: 45,  prpKw: 36,  baudouin: '4M06G50/5',  alternador: 'LK224D', ficha: 'LK50B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK72B',  espKva: 72,  espKw: 57,  prpKva: 65,  prpKw: 52,  baudouin: '4M10G70/5',  alternador: 'LK224FS', ficha: 'LK72B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK88B',  espKva: 88,  espKw: 70,  prpKva: 80,  prpKw: 64,  baudouin: '4M10G88/5',  alternador: 'LK224G/S', ficha: 'LK88B.pdf',  manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK110B', espKva: 110, espKw: 88,  prpKva: 100, prpKw: 80,  baudouin: '4M10G110/5',  alternador: 'LK274C', ficha: 'LK110B.pdf', manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK150B', espKva: 150, espKw: 120, prpKva: 135, prpKw: 108, baudouin: '6M11G150/5',  alternador: 'LK274E', ficha: 'LK150B.pdf', manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK165B', espKva: 165, espKw: 132, prpKva: 150, prpKw: 120, baudouin: '6M11G165/5',  alternador: 'LK274F/S', ficha: 'LK165B.pdf', manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK188B', espKva: 188, espKw: 150, prpKva: 170, prpKw: 136, baudouin: '6M11G188/5',  alternador: 'LK274G', ficha: 'LK188B.pdf', manual: 'MANUAL USUARIO ESP LK.pdf' },
  { modelo: 'LK250B', espKva: 250, espKw: 200, prpKva: 225, prpKw: 180, baudouin: '6M16G250/5',  alternador: 'LK274K', ficha: 'LK250B.pdf', manual: 'MANUAL USUARIO ESP LK.pdf' },
];

const Descargas = () => {
  const { t } = useTranslation();

  /* ---------- Schema.org (sin .toString() que rompa) ---------- */
  const downloadsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Descargas - Documentación Técnica LK Energy",
    description: "Fichas técnicas y manuales de generadores LK Energy",
    url: "https://lkenergy.com/descargas",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: data.length,
      itemListElement: data.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          name: `Generador ${item.modelo}`,
          model: item.modelo,
          manufacturer: { "@type": "Organization", name: "LK Energy" },
          additionalProperty: [
            { "@type": "PropertyValue", name: "ESP KVA", value: String(item.espKva) },
            { "@type": "PropertyValue", name: "ESP kW", value: String(item.espKw) },
            { "@type": "PropertyValue", name: "PRP KVA", value: String(item.prpKva) },
            { "@type": "PropertyValue", name: "PRP kW", value: String(item.prpKw) },
            { "@type": "PropertyValue", name: "Baudouin", value: item.baudouin },
            { "@type": "PropertyValue", name: "Alternador", value: item.alternador },
          ],
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Descargas - Documentación Técnica Generadores LK Energy"
        description="Fichas técnicas y manuales de usuario de todos los modelos de generadores LK Energy"
        keywords="descargas LK Energy, fichas técnicas generadores, manuales usuario"
        canonical="/descargas"
        ogType="website"
      />

      <div className="table-container">
        <script type="application/ld+json">{JSON.stringify(downloadsSchema)}</script>

        <table className="custom-table" role="grid" aria-label="Tabla de descargas">
          <thead>
            <tr>
              <th>{t('downloads.tableHeaders.model')}</th>
              <th>{t('downloads.tableHeaders.espKva')}</th>
              <th>{t('downloads.tableHeaders.espKw')}</th>
              <th>{t('downloads.tableHeaders.prpKva')}</th>
              <th>{t('downloads.tableHeaders.prpKw')}</th>
              <th>{t('downloads.tableHeaders.baudouin')}</th>
              <th>{t('downloads.tableHeaders.alternator')}</th>
              <th colSpan="2">{t('downloads.tableHeaders.download')}</th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => (
              <tr key={item.modelo}>
                <td>{item.modelo}</td>
                <td>{item.espKva}</td>
                <td>{item.espKw}</td>
                <td>{item.prpKva}</td>
                <td>{item.prpKw}</td>
                <td>{item.baudouin}</td>
                <td>{item.alternador}</td>

                <td className="descarga">
                  <ProtectedLink href={`/docs/${item.ficha}`} aria-label={`Ficha ${item.modelo}`}>
                    <FaDownload />
                    <span className="space">{t('downloads.documents.technicalSheet')}</span>
                  </ProtectedLink>
                </td>
                <td className="descarga">
                  <ProtectedLink href={`/docs/${item.manual}`} aria-label={`Manual ${item.modelo}`}>
                    <FaDownload />
                    <span className="space">{t('downloads.documents.userManual')}</span>
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