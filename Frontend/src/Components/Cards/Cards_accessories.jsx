import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

const BasicExample3 = ({ accessoryID, accessoryTitle, accessoryImage, accessoryManufacturer, accessoryCategories, accessoryDescription }) => {
  const [showModal, setShowModal] = useState(false);
  const [showNotLoggedModal, setShowNotLoggedModal] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShowModal(false);
  const handleCloseCart = () => {
    setShowModal(false);
    navigate('/Carrito');
  }
  const handleCloseNotLogged = () => setShowNotLoggedModal(false);
  const handleNotLogged = () => {
    setShowNotLoggedModal(false);
    navigate('/LoginForm')

  }
  const handleShow = () => {
    if (localStorage.getItem('token') !== null) {
      setShowModal(true);
    } else {
      setShowNotLoggedModal(true)
    }
  }

  const addToCart = () => {
    // Creamos el objeto que representará el accesorio a agregar al carrito
    const accessoryToAdd = {
      accessoryID,
      accessoryTitle,
      accessoryImage,
      accessoryManufacturer,
      accessoryCategories,
      accessoryDescription
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

    // Agregamos el nuevo accesorio al carrito
    cart.push(accessoryToAdd);
    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostramos el modal
    handleShow();
  };

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
          <div style={{ marginBottom: '10px' }}> {/* Agregar un margen inferior */}
          </div>
          <Button variant="primary" onClick={addToCart}>Agregar al carrito</Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>El accesorio ha sido agregado al carrito exitosamente.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continuar comprando
          </Button>
          <Button variant="primary" onClick={handleCloseCart}>
            Ir al carrito
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNotLoggedModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>No has iniciado sesion &#x1F625;</Modal.Title>
        </Modal.Header>
        <Modal.Body>Inicia sesion para agregar elementos al carrito !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNotLogged}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleNotLogged}>
            Iniciar sesion
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BasicExample3;
