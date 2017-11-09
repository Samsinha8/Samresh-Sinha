import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="fa fa-bars" />
          <h2 className="name">Samresh Kumar Sinha</h2>
          <a className="github" href="https://github.com/Samsinha8"><i className="fa fa-github" /></a>
          <a className="linked" href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><i className="fa fa-linkedin" /></a>
        </header>
        <div className="navbar">
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolios</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="content">
        </div>
      </div>
    );
  }
}

export default App;