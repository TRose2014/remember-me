/* eslint-disable no-undef */
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Image from '../../assets/Serious-face.png';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <div className="about">
        <img src={Image} className="aboutMeImage" alt="Tia Rose" />
        <h1 className="aboutHeader">About Me</h1>
        <p>My name is Tia Rose and I am a mother, software developer, and a black woman. After the death of George Floyd, I was sick and tired of seeing black lives being prematurely taken, not only by brutal and violent police officers, but also by those who think they can take the law into their own hands. My hope is that this web page can be used to remind others of those we lost and remember them not only for how they died, but how they lived.</p>
        <p>If this website gets enough traction I would love to have the ability to create dedicated, personal web pages for each individual that speaks on how they lived and who they wanted to be, if given the chance.</p>
      </div>
      <div className="socialIconContainer">
        <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://github.com/TRose2014')}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/rosetia/')}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
}

export default AboutPage;
