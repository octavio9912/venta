import React, { useEffect, useState } from 'react';
import './Carrito.css';
import Button from 'react-bootstrap/Button';

const Carrito = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    // Obtenemos el carrito actual del localStorage
    let updatedCart = JSON.parse(localStorage.getItem('cart'));
    // Eliminamos el elemento en la posición index
    updatedCart.splice(index, 1);
    // Actualizamos el carrito en el localStorage
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  useEffect(() => {
    if (localStorage.getItem('cart') != null) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    } else {
      setCart([]);
    }
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handlePurchase = () => {
    // Lógica para manejar la compra (puede ser una llamada a una API, redirección, etc.)
    alert('Compra realizada con éxito!');
  };

  return (
    <div className="carrito-container">
      <h2 style={{ color: 'white' }}>Carrito</h2>
      {cart[0] != null ? (
        cart.map((item, index) => (
          <div className="carrito-item" key={index}>
            {item.gameTitle && (
              <>
                <h3>{item.gameTitle}</h3>
                <img src={item.gameImage} alt={item.gameTitle} />
                <p>Desarrollador: {item.gameDeveloper}</p>
                <p>Diseñador: {item.gameDesigner}</p>
                <p>Fecha de estreno inicial: {item.gameReleaseDate}</p>
                <p className="price">Precio: ${item.price}</p>
              </>
            )}
            {item.consoleTitle && (
              <>
                <h3>{item.consoleTitle}</h3>
                <img src={item.consoleImage} alt={item.consoleTitle} />
                <p>Manofactura: {item.consoleManufacturer}</p>
                <p>Categoria: {item.consoleCategories}</p>
                <p>Descripcion: {item.consoleDescription}</p>
                <p className="price">Precio: ${item.price}</p>
              </>
            )}
            {item.accessoryTitle && (
              <>
                <h3>{item.accessoryTitle}</h3>
                <img src={item.accessoryImage} alt={item.accessoryTitle} />
                <p>Manofactura: {item.accessoryManufacturer}</p>
                <p>Categoria: {item.accessoryCategories}</p>
                <p>Descripcion: {item.accessoryDescription}</p>
                <p className="price">Precio: ${item.price}</p>
              </>
            )}
            <Button variant="primary" onClick={() => removeFromCart(index)}>Eliminar del carrito</Button>
          </div>
        ))
      ) : (
        <h1 style={{ color: 'white' }}>No hay elementos en el carrito.</h1>
      )}
      {cart.length > 0 && (
        <div className="carrito-total">
          <h3>Total: ${calculateTotalPrice()}</h3>
          <Button variant="success" onClick={handlePurchase}>Comprar</Button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
