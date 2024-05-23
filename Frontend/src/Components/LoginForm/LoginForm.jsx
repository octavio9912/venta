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

  return (
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
  )
}

export default LoginForm