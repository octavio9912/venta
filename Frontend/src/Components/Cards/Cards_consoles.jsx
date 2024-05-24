import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BasicExample2 = ({ consoleID, consoleTitle, consoleImage, consoleManufacturer, consoleCategories, consoleDescription}) => {
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
          <Card.Link href="#">Comprar</Card.Link>
          <Card.Link href="#">Añadir al carrito</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample2;