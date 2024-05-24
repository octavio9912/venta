import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BasicExample3 = ({ accessoryID, accessoryTitle, accessoryImage, accessoryManufacturer, accessoryCategories, accessoryDescription}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={accessoryImage} />
        <Card.Body>
          <Card.Title>{accessoryTitle}</Card.Title>
          <Card.Text>
            {accessoryDescription}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Categoria: {accessoryCategories}</ListGroup.Item>
          <ListGroup.Item>Manofactura: {accessoryManufacturer}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Comprar</Card.Link>
          <Card.Link href="#">Añadir al carrito</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample3;