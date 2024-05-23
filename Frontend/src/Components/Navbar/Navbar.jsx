import React, { useState } from "react";
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { FaUserAlt, FaPowerOff } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";


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
          <Link className="nav-link" to="/Categorias" >Categorias</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Ofertas" >Ofertas</Link>
        </li>
        <li>
          <Link className="nav-link" to="/Contactos" >Contactos</Link>
        </li>
      </ul>
    </div>

    <div  id="tienda" class="caja2" >
      <ul>
        <li><Link className="nav-link" to="/LoginForm" > {localStorage.getItem('user') || 'Sesion no iniciada'}  <FaUserAlt className='icon'/>  </Link></li>
        <li  hidden={localStorage.getItem('token')? false : true} onClick={handlerLogout}> <FaPowerOff className='icon'/> </li>
        <li  ><Link className="nav-link" to="/LoginForm" >    <MdLocalGroceryStore />  </Link></li>
      </ul>
   
    </div>

  </nav>
);
};

export default Navbar 