import React from 'react';
import SliderMenu from '../Components/SliderMenu';
import '../App.css';

const Header = () => (
  <div className="App-header">
    <SliderMenu />
    <a href="#root" className="openbtn" aria-hidden>
      <i className="fa fa-bars" />
    </a>
    <h1 className="name">Samresh Kumar Sinha</h1>
    <a className="github" href="https://github.com/Samsinha8"><i className="fa fa-github" /></a>
    <a className="linked" href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><i className="fa fa-linkedin" /></a>
  </div>
);
  
export default Header;