import React from 'react';

const SliderMenu = () => (
  <nav id="nav">
    <div className="sidenav">
      <div className="slideHeader">
        <img src="/images/myimage.jpg" className="sideimage" alt="" />
        <a href="#!" className="closebtn">
          <i className="fa fa-times" />
        </a>
      </div>
      <div className="links">
        <a href="/wikipetia" className="align">
            <i className="fa fa-lightbulb-o space" aria-hidden="false" />
            <p>Wikipetia</p>
        </a>
        <a href="/AboutUs" className="align">
            <i className="fa fa-info space" aria-hidden="true" />
            <p>About Us</p>
        </a>
        <a href="#gallery_head" className="align">
            <i className="fa fa-file-photo-o space" aria-hidden="true" />
            <p>Screenshots</p>
        </a>
        <a href="#downloadApp" className="align">
            <i className="fa fa-download space" aria-hidden="true" />
            <p>Download App</p>
        </a>
        <a href="#root" onClick={this.toggle} className="align">
            <i className="fa fa-phone space" aria-hidden="true" />
            <p>Contact Us</p>
        </a>
      </div>
    </div>
    <div className="backdrop" />
  </nav>
);

export default SliderMenu;
