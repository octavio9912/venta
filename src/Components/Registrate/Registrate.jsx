import React from 'react'
import './Registrate.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";



const Register = () => {
  return (
    <div className='wrapper'>
        <form action=''>
        <h1>Registrate</h1>

        <div className='input-box'>
            <label>      Correo Electrónico:</label>
            <input type='email' placeholder='Correo' required/>
        </div>

        <div className='input-box'>
            <label >      Nombre Completo:</label>
            <input type='text' placeholder='Nombre' required/>
        </div>

        <div className='input-box'>
            <label>      Contraseña:</label>
            <input type='password' placeholder='Contraseña' required/>
        </div>
        
        <div className='input-box'>
            <label >      Número de Tarjeta:</label>
            <input type='number' placeholder='Número de Tarjeta' required/>
        </div>

        <div className='input-box'>
            <label>      Fecha de Vencimiento:</label>
            <input type='date' placeholder='Fecha de Vencimiento' required/>
        </div>

        <div className='input-box'>
            <label>      CCV:</label>
            <input type='number' placeholder='CCV' required/>
        </div>

        <button type='submit'>Login</button>

       

        </form>
    </div>
  )
}

export default Register