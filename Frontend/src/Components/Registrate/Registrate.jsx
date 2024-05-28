import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signin from '../../API/signin';
import './Registrate.css'; // Asegúrate de tener los estilos necesarios
import { Button, Modal } from 'antd';
import { emailRegex } from '../RegexMail/RegexMail';

const Register = () => {
    const [modal, contextHolder] = Modal.useModal();
    const navigate = useNavigate();
    const [mail, setMail] = useState('');
    const [completeName, setCompleteName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [ccv, setCcv] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
    const redireccion = '/inicio';
    const [errorMessage, setErrorMessage] = useState('');



    const countDown = (title, content) => {
        let secondsToGo = 5;
        const instance = modal.success({
            title: title,
            content: title,
        });
        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: content,
            });
        }, 1000);
        setTimeout(() => {
            if (password === confirmPassword) {
                clearInterval(timer);
                instance.destroy();
                navigate(redireccion);
            } else {
                clearInterval(timer);
                instance.destroy();
            }

        }, secondsToGo * 1000);
    };

    const handlerSignin = async () => {
        if (emailRegex.test(mail)) {
            try {
                if (password === confirmPassword) {
                    const respuesta = await signin(mail, completeName, password, creditCard, expirationDate, ccv);
                    if (respuesta.data) {
                        console.log({ "Respuesta del backend": respuesta.data });
                        countDown(`Creacion del usuario ${completeName} exitosa !`, respuesta.data.operation);

                    } else {
                        console.log('-----' + respuesta.data);
                    }
                } else {
                    countDown(`Error !`, "Las contraseñas no son iguales!")
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            setErrorMessage('El email no es valido')
        }
    };
    const handlerMail = (event) => setMail(event.target.value);
    const handlerCompleteName = (event) => setCompleteName(event.target.value);
    const handlerPassword = (event) => setPassword(event.target.value);
    const handlerConfirmPassword = (event) => setConfirmPassword(event.target.value);
    const handlerCreditCard = (event) => setCreditCard(event.target.value);
    const handlerExpirationDate = (event) => setExpirationDate(event.target.value);
    const handlerCcv = (event) => setCcv(event.target.value);

    return (
        <>
            {contextHolder}
            <div className='wrapper'>
                <div className="bordered-div">
                    <h1>Registrate</h1>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                        <label>Confirmar contraseña:</label>
                        <input value={confirmPassword} onChange={handlerConfirmPassword} type='password' placeholder='Confirmar contraseña' required />
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

                {showModal ? <>

                </>
                    : <></>
                }
            </div>
        </>
    );
};

export default Register;
