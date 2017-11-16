import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../App.css';

const About = () => (
  <div className="App">
    <Header />
    <div className="navbar">
      <ul className="list">
        <Link to="/" className="nodec"><li className="ignore">Home</li></Link>
        <Link to="/About" className="nodec"><li className="dontignore"><b>About</b></li></Link>
        <Link to="/Skills" className="nodec"><li className="dontignore">Skills</li></Link>
        <Link to="/Portfolios" className="nodec"><li className="dontignore">Portfolios</li></Link>
        <Link to="/Contacts" className="nodec"><li className="dontignore">Contacts</li></Link>
      </ul>
    </div>
    <Fade left>
      <div className="desc">
        <div className="abthead" />
        <h1 className="text">About Me</h1>
        <h2>Hi !</h2>
        <p>
          My name is Samresh Kumar Sinha and I have completed my B-Tech degree in Electrical Engineering
          from Calcutta Institute of Technology, Howrah.
        </p>
        <p>
          I joined CIT in 2011. Joining CIT was great for me in my life. Although I chose a different
          field, I always had interest in Programming and Web-development. I am now a step closer to my
          goal, becoming a software developer.
        </p>
        <p>
          I am currently searching for an opportunity to fulfill my goal and to use my knowledge for
          the development of the firm.
        </p>
        <p>
          I like exploring new tech articles on the internet, to keep myself updated with the recent
          technology. My interest lies in knowing more about Web Technology.
        </p>
        <p>
          In my free time, I like to share my knowledge on Quora and do competitive coding on Websites
          like Hackerrank. I also play Table Tennis.
        </p>
        <hr />
        <a href="https://drive.google.com/file/d/1J8T3MJ4W5l4z5Sjp0_u691QJH2CqYE4d/view?usp=sharing"><h3>CLICK HERE TO VIEW MY RESUME</h3></a>
      </div>
    </Fade>
  </div>
);

export default About;