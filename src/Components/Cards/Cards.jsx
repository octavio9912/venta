import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const BasicExample = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/2e/97/43/2e9743e1252fccdcd073575d7d2d2a3e.jpg" />
      <Card.Body>
        <Card.Title>God of War</Card.Title>
        <Card.Text>
        God of War es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Desarrollador: SIE Santa Monica Studio</ListGroup.Item>
        <ListGroup.Item>Diseñador: David Jaffe</ListGroup.Item>
        <ListGroup.Item>Fecha de estreno inicial: 22 de marzo de 2005</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Comprar</Card.Link>
        <Card.Link href="#">Añadir al carrito</Card.Link>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
  );
}

export default BasicExample;