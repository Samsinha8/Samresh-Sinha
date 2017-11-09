import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <i className="fa fa-bars" />
          <h1 className="name">Samresh Kumar Sinha</h1>
          <a className="github" href="https://github.com/Samsinha8"><i className="fa fa-github" /></a>
          <a className="linked" href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><i className="fa fa-linkedin" /></a>
        </header>
        <div className="navbar">
          <ul className="list">
            <li className="ignore">Home</li>
            <li className="dontignore">About</li>
            <li className="dontignore">Skills</li>
            <li className="dontignore">Portfolios</li>
            <li className="dontignore">Contact</li>
          </ul>
        </div>
        <div className="content" />
        <img className="myimage" src="/images/myimage.jpg" alt="" />
        <h1 className="hi">Hi ! I am Samresh</h1>
      </div>
    );
  }
}

export default App;