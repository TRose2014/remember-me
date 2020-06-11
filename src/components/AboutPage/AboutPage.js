import React from 'react';
import Image from '../../assets/Serious-face.png';
import './AboutPage.css';


function AboutPage() {
  return (
    <>
      <h1 className="aboutHeader">About Me</h1>
      <div className="about">
        <img src={Image} className="aboutMeImage" alt="Tia Rose" />
        <p>My name is Tia Rose and I am a mother, software developer, and a black woman. After the death of George Floyd, I was sick and tired of seeing black lives being prematurely taken, not only by brutal and violent police officers, but also by those who think they can take the law into their own hands. My hope is that this web page can be used to remind others of those we lost and remember them not only for how they died, but how they lived.</p>
        <p>If this website gets enough traction I would love to have the ability to create dedicated, personal web pages for each individual that speaks on how they lived and who they wanted to be, if given the chance.</p>
      </div>
    </>
  );
}

export default AboutPage;
