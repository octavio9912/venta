import React, { useState } from 'react';
import './Formulario.css'; // Importar estilos CSS

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [sugerencia, setSugerencia] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleSugerenciaChange = (event) => {
    setSugerencia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar la sugerencia al servidor o donde sea necesario
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Sugerencia:', sugerencia);
    // Limpiar los campos después de enviar la sugerencia
    setNombre('');
    setCorreo('');
    setSugerencia('');
  };

  return (
    <div className="formulario-container">
      <h1>Formulario de Sugerencias</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={handleCorreoChange}
            required
          />
        </label>
        <label>
          Sugerencia:
          <textarea
            value={sugerencia}
            onChange={handleSugerenciaChange}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
