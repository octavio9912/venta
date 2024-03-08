import React from 'react'
import './footer.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'


const footer = () => {
  return (
    <footer class="footer">
    <div class="footer-content">
      <p>© 2024 Todos los derechos reservados.</p>
      <ul class="footer-nav">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default footer