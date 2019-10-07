import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './pages/Main';
import ProfilePage from './pages/Profile';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Fake Tweeter</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  exact
                  to="/"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to="/profile"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
        <Route exact path='/' component={MainPage} />
        <Route path='/profile' component={ProfilePage} />
      </Router>
    </div>
  );
}

export default App;
