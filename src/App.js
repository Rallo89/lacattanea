import React, { Component } from "react";
import './App.css';
import Header from "./Components/Header";
import Signup from "./Components/Signup";
import {AuthProvider} from "./context/AuthContext";
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Container>
          <div className="App">
            <Signup />
          </div>
        </Container>
      </AuthProvider>
    );
  }
}

export default App;

