import React from 'react'
import './Contactos.css'
import Formulario from '../Components/Formulario/Formulario'


const Contactos = () => {
  return (
    <section class="content">
    <div class="text">
      <h2>Contactanos</h2>
      <p>¿Tienes alguna pregunta, sugerencia o simplemente quieres decir hola? ¡Nos encantaría saber de ti! Puedes ponerte en contacto con nosotros a través de nuestro formulario en línea, por correo electrónico o por teléfono. Nuestro equipo de atención al cliente está aquí para ayudarte en lo que necesites. En JGL, valoramos tu opinión y estamos comprometidos a brindarte el mejor servicio posible. ¡Esperamos saber de ti pronto!</p>
    </div>
    <div class="image">
    <p>Visitanos </p>
       <iframe id="map-canvas" class="map_part" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=slp alameda&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">embed google maps</a> and <a href="http://eucasinos.se/">eu casino</a></iframe>
    </div>
    <div>
    <Formulario/>
    </div>
 
  </section>
  
  )
}

export default Contactos