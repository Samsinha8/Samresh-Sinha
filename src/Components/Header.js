import React from 'react';
import { Link } from 'react-router-dom';
import SliderMenu from '../Components/SliderMenu';
import '../App.css';

const Header = () => (
  <div className="App-header">
    <SliderMenu />
    <a href="#root" className="openbtn" aria-hidden>
      <i className="fa fa-bars" />
    </a>
    <Link className="myname" to="/"><h1 className="name">Samresh Kumar Sinha</h1></Link>
    <a className="github" href="https://github.com/Samsinha8"><i className="fa fa-github githead" /></a>
    <a className="linked" href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><i className="fa fa-linkedin linkhead" /></a>
  </div>
);
  
export default Header;