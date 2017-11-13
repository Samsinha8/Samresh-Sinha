import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const About = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore">Home</li></Link>
        <Link to="/About" className="nodec"><li className="dontignore"><b>About</b></li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore">Skills</li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore">Portfolios</li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore">Contacts</li></Link>
      </ul>
    </div>
    <div className="content" />
    <div className="desc">
      <div className="abthead" />
      <h1 className="text">About Me</h1>
      <p>
        My name is Samresh Kumar Sinha and I've completed my B-Tech degree in Electrical Engineering from Calcutta Institute of Technology, Howrah.
      </p>
    </div>

  </div>
);

export default About;