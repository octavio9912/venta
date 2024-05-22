import React from 'react'
import './Categorias.css'
import BasicExample from '../Components/Cards/Cards'
import Carousell from '../Components/Carousel/Carousel'

const Ofertas = () => {
  return (
    <section class="content-Inicio">
    <div >
      <h2>Ofertas</h2>
    </div>

    <div class="carousel">
        <Carousell/>
    </div>

    <div class="Cards">
    <BasicExample/>
    <BasicExample/>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
    </div>
    
  </section>
  
  )
}

export default Ofertas