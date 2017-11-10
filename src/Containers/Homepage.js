import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const Homepage = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <li className="ignore"><b>Home</b></li>
        <li className="dontignore"><Link to="/About" className="nodec">About</Link></li>
        <li className="dontignore"><Link to="/Skills" className="nodec">Skills</Link></li>
        <li className="dontignore"><Link to="/Portfolios" className="nodec">Portfolios</Link></li>
        <li className="dontignore"><Link to="/Contacts" className="nodec">Contacts</Link></li>
      </ul>
    </div>
    <div className="content" />
    <img className="myimage" src="/images/myimage.jpg" alt="" />
    <h1 className="hi">Hi ! I am Samresh</h1>
  </div>
);

export default Homepage;