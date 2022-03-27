import React, { Component } from "react";
import './App.css';
import './components/materialize.min.css'
import Navbar from "./components/Navigationbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./components/PrivateRoute";
import Navigationbar from "./components/Navigationbar";

/**
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Products}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
 */


class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <AuthProvider>
              <Navigationbar />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
    );
  }
}

export default App;

/**
 * <AuthProvider>
        <Container>
          <div className="App">
            <Signup />
          </div>
        </Container>
      </AuthProvider>
 */
