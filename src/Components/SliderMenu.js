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
        <a href="https://github.com/Samsinha8"><h3><i className="fa fa-github icons" />Github</h3></a>
        <a href="https://www.linkedin.com/in/samresh-kumar-sinha-84393b146/"><h3><i className="fa fa-linkedin icons" />Linkedin</h3></a>
        <a href="https://angel.co/samresh-kumar-sinha"><h3><i className="fa fa-angellist icons" />Angel List</h3></a>
        <a href="https://drive.google.com/file/d/0BwaHyFnWjuFRY0pTUjFzRmt6TTg/view?usp=sharing"><h3><i className="fa fa-address-card-o icons2" />My Resume</h3></a>
        <a href="mailto:sam.749382@gmail.com"><h3><i className="fa fa-envelope email icons2" />sam.749382@gmail.com</h3></a>
        <a href="https://www.facebook.com/sam.sinha0"><h3><i className="fa fa-facebook icons" />facebook</h3></a>
        <a href="https://twitter.com/SamSamresh"><h3><i className="fa fa-twitter icons" />Twitter</h3></a>
        <a><h3><i className="fa fa-phone icons" />9852236661</h3></a>
      </div>
    </div>
    <div className="backdrop" />
  </nav>
);

export default SliderMenu;
