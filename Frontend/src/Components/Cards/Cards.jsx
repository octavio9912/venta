import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'; 

const BasicExample = ({ gameID, gameImage, gameTitle, gameText, gameDeveloper, gameDesigner, gameReleaseDate }) => {
  
  const addToCart = () => {
    // Creamos el objeto que representará el juego a agregar al carrito
    const gameToAdd = {
      gameID,
      gameTitle,
      gameImage,
      gameDeveloper,
      gameDesigner,
      gameReleaseDate
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

    // Agregamos el nuevo juego al carrito
    cart.push(gameToAdd);
    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={gameImage} />
        <Card.Body>
          <Card.Title>{gameTitle}</Card.Title>
          <Card.Text>
            {gameText}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Desarrollador: {gameDeveloper}</ListGroup.Item>
          <ListGroup.Item>Diseñador: {gameDesigner}</ListGroup.Item>
          <ListGroup.Item>Fecha de estreno inicial: {gameReleaseDate}</ListGroup.Item>
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

export default BasicExample;
