import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signin from '../../API/signin';
import './Registrate.css'; // Asegúrate de tener los estilos necesarios

const Register = () => {
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [completeName, setCompleteName] = useState('');
    const [password, setPassword] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [ccv, setCcv] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
    const redireccion = '/inicio';

    const handlerSignin = async () => {
        try {
            const respuesta = await signin(mail, completeName, password, creditCard, expirationDate, ccv);
            if (respuesta.data && respuesta.data.token) {
                console.log({ "Respuesta del backend": respuesta.data });
                localStorage.setItem('token', respuesta.data.token);
                setShowModal(true); // Mostrar modal
            } else {
                console.log(respuesta.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setMail('');
        setCompleteName('');
        setPassword('');
        setCreditCard('');
        setExpirationDate('');
        setCcv('');
        navigate(redireccion);
    };

    const handlerMail = (event) => setMail(event.target.value);
    const handlerCompleteName = (event) => setCompleteName(event.target.value);
    const handlerPassword = (event) => setPassword(event.target.value);
    const handlerCreditCard = (event) => setCreditCard(event.target.value);
    const handlerExpirationDate = (event) => setExpirationDate(event.target.value);
    const handlerCcv = (event) => setCcv(event.target.value);

    return (
        <div className='wrapper'>
            <div className="bordered-div">
                <h1>Registrate</h1>

                <div className='input-box'>
                    <label>Correo Electrónico:</label>
                    <input value={mail} onChange={handlerMail} type='email' placeholder='Correo' required />
                </div>

                <div className='input-box'>
                    <label>Nombre Completo:</label>
                    <input value={completeName} onChange={handlerCompleteName} type='text' placeholder='Nombre Completo' required />
                </div>

                <div className='input-box'>
                    <label>Contraseña:</label>
                    <input value={password} onChange={handlerPassword} type='password' placeholder='Contraseña' required />
                </div>

                <div className='input-box'>
                    <label>Número de Tarjeta:</label>
                    <input value={creditCard} onChange={handlerCreditCard} type='number' placeholder='Número de Tarjeta' required />
                </div>

                <div className='input-box'>
                    <label>Fecha de Vencimiento:</label>
                    <input value={expirationDate} onChange={handlerExpirationDate} type='date' placeholder='Fecha de Vencimiento' required />
                </div>

                <div className='input-box'>
                    <label>CCV:</label>
                    <input value={ccv} onChange={handlerCcv} type='number' placeholder='CCV' required />
                </div>

                <button type='button' onClick={handlerSignin}>Registrarse</button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Registro Exitoso</h2>
                        <p>Te has registrado correctamente.</p>
                        <button onClick={closeModal}>Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
