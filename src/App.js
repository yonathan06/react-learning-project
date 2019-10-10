import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppContext } from "./context";
import MainPage from './pages/Main';
import ProfilePage from './pages/Profile';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: localStorage.getItem('userName') || '',
      setUserName: (userName) => this.setUserName(userName),
    }
  }

  setUserName(userName) {
    this.setState({ userName });
    localStorage.setItem('userName', userName);
    alert(`User name saved as "${userName}"`)
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Itc bootcamp SM</a>
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
      </AppContext.Provider>
    );
  }    
}

export default App;
