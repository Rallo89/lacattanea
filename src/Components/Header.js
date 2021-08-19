import React, { useState }  from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./bootstrap.min.css"
import Modal from 'react-bootstrap/Modal';
import Divider from '@material-ui/core/Divider';

export default function Header() {

  const [show, setShow] = useState(false);

  return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">La Cattanea</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#menu">Menù</Nav.Link>
            <Nav.Link href="#carrello">Carrello</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse class="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => setShow(true)}>Login</Nav.Link>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Login
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}