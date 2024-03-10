import { BrowserRouter as Router, Link, Outlet, Route, Routes, Switch } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Registrate from './Components/Registrate/Registrate';
import Footer from './Components/Footer/Footer';
import Cards from './Components/Cards/Cards';

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
        </Routes>
      </Router>
    
      <Footer/>

    </header>
    
    
  );
}
export default App;
