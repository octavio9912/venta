import React from 'react'
import './LoginForm.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { useState } from "react";
import login from '../../API/login';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const redireccion = '/inicio'
    const handlerLogin = () => {
        try {
            login(mail, password).then((respuesta) => {
                if(respuesta.data.token != null){
                    console.log({"Respuesta del backend":respuesta.data})
                    localStorage.setItem('token', respuesta.data.token);
                    localStorage.setItem('user', respuesta.data.user);
                    localStorage.setItem('credit-card', respuesta.data.creditCard);
                    localStorage.setItem('expiration-date', respuesta.data.expirationDate);
                    localStorage.setItem('ccv', respuesta.data.ccv);
                    setTimeout(() => {
                        navigate(redireccion)
                    }, 200)

                }else{
                    console.log(respuesta.data)
                }

            })
        } catch (error) {
            console.log(error)
        }
        
    }

    const handlerMail = (event) => {
        setMail(event.target.value);
    }

    const handlerPassword = (event) => {
        setPassword(event.target.value);
    }

  return (<>
    <div className='wrapper'>
 
        <h1>Login</h1>
        <div className='input-box'>
            <input onChange={handlerMail} type='text' placeholder='Username' required/>
            <FaUserAlt className='icon'/>

        </div>
        <div className='input-box'>
            <input onChange={handlerPassword} type='password' placeholder='Password' required />
            <FaLock className='icon'/>
        </div>

        <div className='remember-forgot'>
            <label><input type='checkbox' />Recordar </label>
            <a href='#'>No recuerdas la contrasena?</a>
            
        </div>

        <button type='submit' onClick={handlerLogin}>Login</button>
        
        <div className='register-link'>
           
            <p> Registrate</p>
        </div>
    </div>
    {/*Mapa de google maps */}
    <iframe id="map-canvas" class="map_part" width="600"  height="450"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=slp alameda&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://embedgooglemaps.com">embed google maps</a> and <a href="http://eucasinos.se/">eu casino</a></iframe>
    </>
  )
}

export default LoginForm