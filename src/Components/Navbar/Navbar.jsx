import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";



const Navbar  = () => {
  const [menuOpen, setMenuOpen] = useState(false);
return (
  <nav  class="navbar">
    
    <div class="caja1" >
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