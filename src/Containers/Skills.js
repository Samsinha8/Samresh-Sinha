import React from 'react';
import Fade from 'react-reveal/Fade';
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
    <Fade left>    
      <div className="desc">
      <div className="sklhead" />
      <h1 className="text">My Skills</h1>
      <h3>LANGUAGES</h3>
      <hr />
      <p>JavaScript, HTML, CSS, C, SQL</p>
      <h3>FRAMEWORKS, LIBRARIES AND OTHER TECHNOLOGIES</h3>
      <hr />
      <p>Node.js, React</p>
      <h3>DATABASES</h3>
      <hr />
      <p>My SQL, MongoDB</p>
      <h3>VERSION CONTROL</h3>
      <hr />
      <p>Git</p>
      <h3>PLATFORMS</h3>
      <hr />
      <p>Windows, Linux (Ubuntu)</p>
      </div>
    </Fade>
  </div>
);

export default Skills;