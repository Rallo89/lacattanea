import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Avatar from '@material-ui/core/Avatar';
import "./bootstrap.min.css"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: `absolute`,
    left: `50%`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Header() {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Login</h2>
      <p id="simple-modal-description">
        Email:
      </p>
      <p id="simple-modal-description">
        Password:
      </p>
      <p id="simple-modal-description">
        Facebook
      </p>
    </div>
  );

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
              <Nav.Link onClick={handleOpen}>Login</Nav.Link>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                {body}
                </Fade>
                
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
}
