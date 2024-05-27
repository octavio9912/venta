import React, { useState } from "react";
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaUserAlt, FaPowerOff, FaShoppingCart  } from "react-icons/fa";

const Navbar  = () => {
const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();

const handlerLogout= () => {
  localStorage.clear(); 
  setTimeout(() => {
    navigate('/')
  },200) 
}

return (
  <nav  class="navbar">
    
    <div class="caja1" >
      <Link to="Inicio" className="title">
      JGL Shop
      </Link>
    </div>

    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <div  class="caja" >
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link className="nav-link" to="/Categorias" >Categorías</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Ofertas" >Ofertas</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Contactos" >Contacto</Link>
        </li>
      </ul>
    </div>

    <div  id="tienda" class="caja2" >
      <ul>
        <li><Link className="nav-link" to="/LoginForm" > {localStorage.getItem('user') || 'Inicia sesión '}  <FaUserAlt className='icon'/>  </Link></li>
        <li hidden={localStorage.getItem('token')? false : true}><Link className="nav-link" to="/Carrito" >  <FaShoppingCart />  </Link></li>
        <li hidden={localStorage.getItem('token')? false : true} onClick={handlerLogout}> <Link className="nav-link" > <FaPowerOff className='icon'/> </Link> </li>
      </ul>
   
    </div>

  </nav>
);
};

export default Navbar 