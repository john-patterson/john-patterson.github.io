import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { WorksPage } from './pages/WorksPage';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">John Patterson</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
              <Nav.Link as={Link} to="/works">Works</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="App-body">
          <div className="content-container">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/resume">
                <ResumePage />
              </Route>
              <Route path="/works">
                <WorksPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
