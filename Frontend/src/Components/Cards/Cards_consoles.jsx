import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const BasicExample2 = ({ consoleID, consoleTitle, consoleImage, consoleManufacturer, consoleCategories, consoleDescription }) => {

  const addToCart = () => {
    // Creamos el objeto que representará la consola a agregar al carrito
    const consoleToAdd = {
      consoleID,
      consoleTitle,
      consoleImage,
      consoleManufacturer,
      consoleCategories,
      consoleDescription
    };

    // Obtenemos el carrito actual del localStorage
    let cart = localStorage.getItem('cart');
    // Si no hay nada en el carrito, creamos un nuevo array
    if (!cart) {
      cart = [];
    } else {
      // Si ya hay algo en el carrito, lo parseamos a un array
      cart = JSON.parse(cart);
    }

    // Agregamos la nueva consola al carrito
    cart.push(consoleToAdd);
    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={consoleImage} />
        <Card.Body>
          <Card.Title>{consoleTitle}</Card.Title>
          <Card.Text>
            {consoleDescription}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Manofactura: {consoleManufacturer}</ListGroup.Item>
          <ListGroup.Item>Categoria: {consoleCategories}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div style={{ marginBottom: '10px' }}> {/* Agregar un margen inferior */}
            <Button variant="primary">Comprar</Button>
          </div>
          <Button variant="primary" onClick={addToCart}>Agregar al carrito</Button> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample2;
