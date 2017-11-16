import React from 'react';
import Fade from 'react-reveal/Fade';
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
    <div className="contact">
      <Fade bottom><h1>Thanks for visiting!</h1></Fade>
      <Fade bottom><p className="first">I would love to hear more from you.</p></Fade>
      <Fade bottom><p className="sec">Want to know more about my projects? My work? Or want to provide me an opportunity of working with you?</p></Fade>
      <Fade bottom><a href="mailto:sam.749382@gmail.com"><h2><i className="fa fa-envelope mail" />sam.749382@gmail.com</h2></a></Fade>
      <Fade bottom><h2><i className="fa fa-phone phone" />9852236661</h2></Fade>
      <div className="fbicons">
        <Fade bottom delay={300}><a href="https://www.facebook.com/sam.sinha0"><i className="fa fa-facebook cicon" /></a></Fade>
        <Fade bottom delay={1000}><a href="https://twitter.com/SamSamresh"><i className="fa fa-twitter cicon" /></a></Fade>
        <Fade bottom delay={1500}><a href="https://plus.google.com/117904419750256545620"><i className="fa fa-google-plus cicon" /></a></Fade>
        <Fade bottom delay={2000}><a href="https://www.instagram.com/samresh_sinha/?hl=en"><i className="fa fa-instagram cicon" /></a></Fade>
      </div>
    </div>
  </div>
);

export default Contacts;