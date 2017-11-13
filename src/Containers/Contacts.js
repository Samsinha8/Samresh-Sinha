import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const Contacts = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore">Home</li></Link>
        <Link to="/About" className="nodec"><li className="dontignore">About</li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore">Skills</li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore">Portfolios</li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore"><b>Contacts</b></li></Link>
      </ul>
    </div>
    <div className="content" />
    <div className="contact">
      <h1>Thanks for visiting!</h1>
      <p className="first">I would love to hear more from you.</p>
      <p className="sec">Want to know more about my projects? My work? Or want to provide me an opportunity of working with you?</p>
      <h2><i className="fa fa-envelope" />sam.749382@gmail.com</h2>
      <h2><i className="fa fa-phone" />9852236661</h2>
    </div>
  </div>
);

export default Contacts;