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

function HomePage(): JSX.Element {
  return (
    <>
      <div>
        <p>Hi, I'm John Patterson, a Software Engineer.</p>
        <p>
          Thanks for coming to my little corner of the Internet. If you are looking to 
          employ me, check out my <Link to="/resume">resume</Link> or maybe my <Link to="/works">portfolio</Link>. 
          If you just want to learn a little bit more about me, you can look at my <Link to="/about">about</Link> page.
        </p>
        <p>
          If you're interested in this website, it was made using the following:
          <ol>
            <li>React</li>
            <li>TypeScript</li>
            <li>GitHub Pages</li>
          </ol>
          You can see the source code <a href="https://github.com/john-patterson/john-patterson.github.io">on GitHub</a>.
        </p>
      </div>
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
