import React, { useState } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";



const Navbar  = () => {
  const [menuOpen, setMenuOpen] = useState(false);
return (
  <nav  class="navbar">
    
    <div class="caja1" >
      <Link to="Inicio" className="title">
      <Link to="Carousel" className="title">
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
          <Link className="nav-link" to="/Categorias" >Categorias</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Ofertas" >Ofertas</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Contactos" >Contactos</Link>
          <Link className="nav-link" to="/Cards" >Categorias</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Inicio" >Ofertas</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Carousel" >Contactos</Link>
        </li>
      </ul>
    </div>

    <div  id="tienda" class="caja2" >
      <ul>
        <li><Link className="nav-link" to="/LoginForm" >   <FaUserAlt className='icon'/>  </Link></li>
        <li><Link className="nav-link" to="/LoginForm" >    <MdLocalGroceryStore />  </Link></li>
      </ul>
   
    </div>

  </nav>
);
};

export default Navbar 