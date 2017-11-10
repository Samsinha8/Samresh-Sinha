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
      <div className="links" />
    </div>
    <div className="backdrop" />
  </nav>
);

export default SliderMenu;
