import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const Skills = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore">Home</li></Link>
        <Link to="/About" className="nodec"><li className="dontignore">About</li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore"><b>Skills</b></li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore">Portfolios</li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore">Contacts</li></Link>
      </ul>
    </div>
    <div className="content" />
    <div className="desc">
    <div className="sklhead" />
    <h1 className="text">My Skills</h1>
    </div>
  </div>
);

export default Skills;