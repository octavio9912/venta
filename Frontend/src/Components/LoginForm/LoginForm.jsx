import React, { useState } from 'react';
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import login from '../../API/login';
import { emailRegex } from '../RegexMail/RegexMail';

const LoginForm = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const redireccion = '/inicio';

    const handlerLogin = async () => {
        if (emailRegex.test(mail)) {
            try {
                const respuesta = await login(mail, password);
                if (respuesta.data.token != null) {
                    console.log({ "Respuesta del backend": respuesta.data });
                    localStorage.setItem('token', respuesta.data.token);
                    localStorage.setItem('user', respuesta.data.user);
                    localStorage.setItem('credit-card', respuesta.data.creditCard);
                    localStorage.setItem('expiration-date', respuesta.data.expirationDate);
                    localStorage.setItem('ccv', respuesta.data.ccv);
                    setTimeout(() => {
                        navigate(redireccion);
                    }, 200);
                } else {
                    setErrorMessage('Usuario o contraseña incorrectos');
                }
            } catch (error) {
                console.log(error);
                setErrorMessage('Error en la conexión al servidor');
            }
        } else {
            setErrorMessage('El email no es valido')
        }
    };

    const handlerMail = (event) => {
        setMail(event.target.value);
    };

    const handlerPassword = (event) => {
        setPassword(event.target.value);
    };

    window.scrollTo({
        top: document.body.scrollHeight / 10,
        behavior: 'instant' // Smooth scrolling behavior
    });

    return (
        <>
            <div className='wrapper'>
                <div className="bordered-div">
                    <h1>Login</h1>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className='input-box'>
                        <input onChange={handlerMail} type='text' placeholder='Username' required />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className='input-box'>
                        <input onChange={handlerPassword} type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <button type='button' onClick={handlerLogin}>Login</button>
                    <div className='register-link'>
                        <p><Link className="nav-link" to="/registrate">Registrate</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
