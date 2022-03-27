import React  from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./bootstrap.min.css"
import logo from '../images/er_cavallo_1.jpeg'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

//USA I LINK NO NAV.LINK

export default function Navigationbar() {

  const { currentUser } = useAuth()

  if(currentUser){
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block"
              alt="React Bootstrap logo"
            />{' '}
            La Cattanea
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Menù</Nav.Link>
              <Nav.Link href="/cart">My cart</Nav.Link>
              <Nav.Link href="/pollList">Sondaggi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block"
              alt="React Bootstrap logo"
            />{' '}
            La Cattanea
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    );
  }
  
}