import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Descargas from './pages/Descargas';
import Contacto from './pages/Contacto';
import ProductGallerySection from './pages/ProductGallerySection';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/generador" element={<ProductGallerySection />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
