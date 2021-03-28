import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import './App.css';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { WorksPage } from './pages/WorksPage';

function App() {
  return (
    <div className="App">
      <Router>
        <head className="App-header">
          <div className="App-header-bar">
            <Link className="App-header-bar-item" to="/">Home</Link>
            <Link className="App-header-bar-item" to="/about">About</Link>
            <Link className="App-header-bar-item" to="/resume">Resume</Link>
            <Link className="App-header-bar-item" to="/works">Works</Link>
          </div>
        </head>
        <body className="App-body">
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
        </body>
      </Router>
    </div>
  );
}

export default App;
