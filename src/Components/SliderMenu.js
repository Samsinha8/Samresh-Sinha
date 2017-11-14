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
        <hr />
        <h1>Explore</h1>
        <hr />
        <a href="https://github.com/Samsinha8"><h3><i className="fa fa-github sidegit" />Github</h3></a>
        <a href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><h3><i className="fa fa-linkedin sidelink" />Linkedin</h3></a>
        <a href="https://drive.google.com/file/d/0BwaHyFnWjuFRY0pTUjFzRmt6TTg/view?usp=sharing"><h3><i className="fa fa-address-card-o" />My Resume</h3></a>
        <a href="mailto:sam.749382@gmail.com"><h3><i className="fa fa-envelope email" />sam.749382@gmail.com</h3></a>
        <a><h3><i className="fa fa-phone sidephone" />9852236661</h3></a>
      </div>
    </div>
    <div className="backdrop" />
  </nav>
);

export default SliderMenu;
