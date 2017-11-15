import React from 'react';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';
import '../../node_modules/react-typist/dist/Typist.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const Homepage = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore"><b>Home</b></li></Link>
        <Link to="/About" className="nodec"><li className="dontignore">About</li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore">Skills</li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore">Portfolios</li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore">Contacts</li></Link>
      </ul>
    </div>
    <div className="content" />
    <div className="home">
      <Fade top>
        <img className="myimage" src="/images/myimage.jpg" alt="" />
      </Fade>
      <Fade delay={500} bottom>
        <h1 className="hi">Hi ! I'm Samresh</h1>
      </Fade>
      <Typist>
        <h2 className="hi2">I am a Developer and Quick Learner</h2>
      </Typist>
    </div>
  </div>
);

export default Homepage;