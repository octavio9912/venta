import React from 'react';
import './Carrito.css';
import Button from 'react-bootstrap/Button';

const Carrito = () => {
  // Obtenemos el carrito actual del localStorage
  const cart = JSON.parse(localStorage.getItem('cart'));

  const removeFromCart = (index) => {
    // Obtenemos el carrito actual del localStorage
    let updatedCart = JSON.parse(localStorage.getItem('cart'));
    // Eliminamos el elemento en la posición index
    updatedCart.splice(index, 1);
    // Actualizamos el carrito en el localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Recargamos la página para reflejar los cambios
    window.location.reload();
  };

  return (
    <div className="carrito-container">
      <h2>Carrito</h2>
      {cart ? (
        cart.map((item, index) => (
          <div className="carrito-item" key={index}>
            {item.gameTitle && (
              <>
                <h3>{item.gameTitle}</h3>
                <img src={item.gameImage} alt={item.gameTitle} />
                <p>Desarrollador: {item.gameDeveloper}</p>
                <p>Diseñador: {item.gameDesigner}</p>
                <p>Fecha de estreno inicial: {item.gameReleaseDate}</p>
              </>
            )}
            {item.consoleTitle && (
              <>
                <h3>{item.consoleTitle}</h3>
                <img src={item.consoleImage} alt={item.consoleTitle} />
                <p>Manofactura: {item.consoleManufacturer}</p>
                <p>Categoria: {item.consoleCategories}</p>
                <p>Descripcion: {item.consoleDescription}</p>
              </>
            )}
            {item.accessoryTitle && (
              <>
                <h3>{item.accessoryTitle}</h3>
                <img src={item.accessoryImage} alt={item.accessoryTitle} />
                <p>Manofactura: {item.accessoryManufacturer}</p>
                <p>Categoria: {item.accessoryCategories}</p>
                <p>Descripcion: {item.accessoryDescription}</p>
              </>
            )}
            <Button variant="primary" onClick={() => removeFromCart(index)}>Eliminar del carrito</Button>
          </div>
        ))
      ) : (
        <p>No hay elementos en el carrito.</p>
      )}
    </div>
  );
}

export default Carrito;
