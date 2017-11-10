import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const About = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <li className="ignore"><Link to="/" className="nodec">Home</Link></li>
        <li className="dontignore"><b>About</b></li>
        <li className="dontignore"><Link to="/Skills" className="nodec">Skills</Link></li>
        <li className="dontignore"><Link to="/Portfolios" className="nodec">Portfolios</Link></li>
        <li className="dontignore"><Link to="/Contacts" className="nodec">Contacts</Link></li>
      </ul>
    </div>
    <div className="content" />
    <h1 className="hi">About</h1>
  </div>
);

export default About;