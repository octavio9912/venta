import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Registrate from './Components/Registrate/Registrate';
import Footer from './Components/footer/footer';
import Cards from './Components/Cards/Cards';
import Contactos from './Paginas/Contactos';
import Inicio from './Paginas/Inicio';
import Ofertas from './Paginas/Ofertas';
import Categorias from './Paginas/Categorias';
import Cargando from './Components/Cargando/Cargando';
import Carrito from './Paginas/Carrito';
import Formulario from './Components/Formulario/Formulario';

function App() {
  return (
    <header>
       
      <Router>
        <Navbar />
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Carousel" element={<Carousel /> } />
          <Route path="/Registrate" element={<Registrate />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Contactos" element={<Contactos />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="/Cargando" element={<Cargando /> } />
          <Route path="/Carrito" element={<Carrito /> } />
          <Route path="/Formulario" element={<Formulario/>} />
          <Route path="*" element={<Inicio /> } />
        </Routes>
      </Router>
    
      <Footer/>

    </header>
    
    
  );
}
export default App;
