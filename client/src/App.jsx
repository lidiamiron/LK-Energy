import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';


import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Descargas from './pages/Descargas';
import Contacto from './pages/Contacto';
import ProductGallerySection from './pages/ProductGallerySection';
import LK21B from './pages/LK21B';
import LK25B from './pages/LK25B';
import LK36B from './pages/LK36B';
import LK44B from './pages/LK44B';
import LK50B from './pages/LK50B';
import LK72B from './pages/LK72B';
import LK88B from './pages/LK88B';
import LK110B from './pages/LK110B';
import LK150B from './pages/LK150B';
import LK165B from './pages/LK165B';
import LK188B from './pages/LK188B';
import LK250B from './pages/LK250B';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Homepage from './pages/Homepage';


function App() {

   const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])

  return (
    
    <Router>
      <MainLayout>
        <Routes>
          <Route path={'/signup'} element={ <SignUp />} />
          <Route path={'/login'} element={ <Login setToken={setToken}/>} />
          {token?<Route path={'/homepage'} element={ <Homepage token={token} />} />:""}
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/generador" element={<ProductGallerySection />} />
          <Route path="/productos/LK21B" element={<LK21B />} />
          <Route path="/productos/LK25B" element={<LK25B />} />
          <Route path="/productos/LK36B" element={<LK36B />} />
          <Route path="/productos/LK44B" element={<LK44B />} />
          <Route path="/productos/LK50B" element={<LK50B />} />
          <Route path="/productos/LK72B" element={<LK72B />} />
          <Route path="/productos/LK88B" element={<LK88B />} />
          <Route path="/productos/LK110B" element={<LK110B />} />
          <Route path="/productos/LK150B" element={<LK150B />} />
          <Route path="/productos/LK165B" element={<LK165B />} />
          <Route path="/productos/LK188B" element={<LK188B />} />
          <Route path="/productos/LK250B" element={<LK250B />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
