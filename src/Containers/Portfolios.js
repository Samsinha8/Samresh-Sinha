import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const Portfolios = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore">Home</li></Link>
        <Link to="/About" className="nodec"><li className="dontignore">About</li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore">Skills</li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore"><b>Portfolios</b></li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore">Contacts</li></Link>
      </ul>
    </div>
    <Fade left>
      <div className="port1">
        <div className="port1head" />
        <h2 className="title">Leopetra website</h2>
        <p className="subdesc">
          Worked on Leopetra website using react.js.<br />
          Full​ ​Responsive​ ​Website​,​ ​with​ ​admins​ ​having​ ​ability​ ​to  update​ ​content​ ​on​ ​server.<br />
          A fully functional website where one can avail any information about pets and also can book
          Vets, Trainers, Saloon, Restaurants and Event tickets for their pets.
        </p>
        <hr />
        <a className="weblink" href="https://leopetra.com/">VISIT LEOPETRA WEBSITE</a>
      </div>
    </Fade>
    <Fade delay={600} left>
      <div className="port2">
        <div className="port2head" />
        <h2 className="title">Indian Tourism website</h2>
        <p className="subdesc">
          Worked on this website using html and css.<br />
          Fully​ ​Responsive​ ​Website​.<br />
          My First website.<br />
          Only for information on tourist sites in India.
        </p>
        <hr />
        <a className="weblink" href="https://output.jsbin.com/yeyiqeh">VISIT THE WEBSITE</a>
      </div>
    </Fade>
  </div>
);

export default Portfolios;