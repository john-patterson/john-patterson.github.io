import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import './App.css';

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
        </body>
      </Router>
    </div>
  );
}

function HomePage(): JSX.Element {
  return (
    <>
      <p>Home page</p>
    </>
  );
}

function AboutPage(): JSX.Element {
  return (
    <>
      <p>About page</p>
    </>
  );
}

function ResumePage(): JSX.Element {
  return (
    <>
      <p>Resume page</p>
    </>
  );
}

function WorksPage(): JSX.Element {
  return (
    <>
      <p>Works page</p>
    </>
  );
}



export default App;
