import { BrowserRouter as Router, Link, Outlet, Route, Routes, Switch } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Components/Inicio/Inicio';
import Registrate from './Components/Registrate/Registrate';


function App() {
  return (
    <div>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Registrate" element={<Registrate />} />
      </Routes>
      </Router>
      <div className='App'>
 <footer/>
</div>
    </div>
    
    
  );
}





export default App;
