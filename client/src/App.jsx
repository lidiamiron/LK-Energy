import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Descargar from './pages/Descargar';
import Contacto from './pages/Contacto';
import ProductGallerySection from './pages/ProductGallerySection';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/descargar" element={<Descargar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/ProductGallery' element={<ProductGallerySection/>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
