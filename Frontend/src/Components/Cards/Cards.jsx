import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BasicExample = ({ gameID, gameImage, gameTitle, gameText, gameDeveloper, gameDesigner, gameReleaseDate }) => {
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
          <Card.Link href="#">Comprar</Card.Link>
          <Card.Link href="#">Añadir al carrito</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;