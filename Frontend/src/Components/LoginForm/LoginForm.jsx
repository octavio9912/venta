import React from 'react'
import './LoginForm.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'


const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
            <input type='text' placeholder='Username' required/>
            <FaUserAlt className='icon'/>

        </div>
        <div className='input-box'>
            <input type='password' placeholder='Password' required />
            <FaLock className='icon'/>
        </div>

        <div className='remember-forgot'>
            <label><input type='checkbox' />Recordar </label>
            <a href='#'>No recuerdas la contrasena?</a>
            
        </div>

        <button type='submit' > <Link className="nav-link" to="/Registrate" ></Link>Login</button>
        
        <div className='register-link'>
           
            <p> <Link className="nav-link" to="/Registrate" >Registrate</Link></p>
        </div>

        </form>
    </div>
  )
}

export default LoginForm