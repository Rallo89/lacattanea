import React, { Component } from "react";
import './App.css';
import './Components/materialize.min.css'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from "./Components/PrivateRoute";
import Navigationbar from "./Components/Navigationbar";

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
