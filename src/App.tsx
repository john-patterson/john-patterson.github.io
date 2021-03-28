import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <head className="App-header">
        <div className="App-header-bar">
          <div className="App-header-bar-item">About</div>
          <div className="App-header-bar-item">Resume</div>
          <div className="App-header-bar-item">Works</div>
        </div>
      </head>
      <body className="App-body">
        <p>This is a test of my CSS <a href="google.com">Link to Google</a>.</p>
      </body>
    </div>
  );
}

export default App;
