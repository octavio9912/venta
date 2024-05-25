import React from 'react'
import './Inicio.css'
import Carousell from '../Components/Carousel/Carousel'
import Cargando from '../Components/Cargando/Cargando';

const Contactos = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling behavior
  });

  return (
    <section class="content-Inicio">
      <div >
        <h2>Sobre nosotros</h2>
        <p>Bienvenido a JGL, tu destino definitivo para todo lo relacionado con los videojuegos. Desde clásicos atemporales hasta los últimos lanzamientos, en JGL nos apasiona ofrecerte la mejor experiencia de juego. Con una amplia selección de videojuegos, consolas, accesorios y más, estamos aquí para satisfacer todas tus necesidades gaming. En JGL, creemos en la excelencia en el servicio al cliente. Nuestro equipo experto está siempre dispuesto a ayudarte a encontrar el juego perfecto, la consola ideal o el accesorio que necesitas. Ya sea que estés buscando sumergirte en una nueva aventura, competir en línea con amigos o simplemente disfrutar de un rato de diversión, en JGL tenemos todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel.</p>
      </div>

      <div class="carousel">
        <Carousell />
      </div>

    </section>

  )
}

export default Contactos