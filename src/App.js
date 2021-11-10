import React, { Component } from "react";
import './App.css';
import './Components/materialize.min.css'
import Header from "./Components/Header";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./Components/PrivateRoute";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Products/>
      </div>
    );
  }
}

/**
class App extends Component {
  render() {
    return (
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    );
  }
}
*/
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
