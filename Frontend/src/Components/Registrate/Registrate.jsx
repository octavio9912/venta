import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signin from '../../API/signin';

const Register = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [completeName, setCompleteName] = useState('');
    const [password, setPassword] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [ccv, setCcv] = useState('');
    const redireccion = '/inicio';

    const handlerSignin = async () => {
        try {
            const respuesta = await signin(mail, completeName, password, creditCard, expirationDate, ccv);
            if (respuesta.data && respuesta.data.token) {
                console.log({ "Respuesta del backend": respuesta.data });
                localStorage.setItem('token', respuesta.data.token);
                setTimeout(() => {
                    navigate(redireccion);
                }, 200);
            } else {
                console.log(respuesta.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlerMail = (event) => {
        setMail(event.target.value);
    };

    const handlerCompleteName = (event) => {
        setCompleteName(event.target.value);
    };

    const handlerPassword = (event) => {
        setPassword(event.target.value);
    };

    const handlerCreditCard = (event) => {
        setCreditCard(event.target.value);
    };

    const handlerExpirationDate = (event) => {
        setExpirationDate(event.target.value);
    };

    const handlerCcv = (event) => {
        setCcv(event.target.value);
    };

    window.scrollTo({
        top: document.body.scrollHeight / 10,
        behavior: 'instant' // Smooth scrolling behavior
    });

    return (
        <div className='wrapper'>
            <div className="bordered-div">
                <h1>Registrate</h1>

                <div className='input-box'>
                    <label>Correo Electrónico:</label>
                    <input onChange={handlerMail} type='email' placeholder='Correo' required />
                </div>

                <div className='input-box'>
                    <label>Nombre Completo:</label>
                    <input onChange={handlerCompleteName} type='text' placeholder='Nombre Completo' required />
                </div>

                <div className='input-box'>
                    <label>Contraseña:</label>
                    <input onChange={handlerPassword} type='password' placeholder='Contraseña' required />
                </div>
                
                <div className='input-box'>
                    <label>Número de Tarjeta:</label>
                    <input onChange={handlerCreditCard} type='number' placeholder='Número de Tarjeta' required />
                </div>

                <div className='input-box'>
                    <label>Fecha de Vencimiento:</label>
                    <input onChange={handlerExpirationDate} type='date' placeholder='Fecha de Vencimiento' required />
                </div>

                <div className='input-box'>
                    <label>CCV:</label>
                    <input onChange={handlerCcv} type='number' placeholder='CCV' required />
                </div>

                <button type='button' onClick={handlerSignin}>Login</button>
            </div>
        </div>
    );
};

export default Register;
