import React from "react";
import "../index.css";
import VanillaTilt from 'vanilla-tilt'
const logo = require('../starWarsLogo.png');


function About() {
  const tiltRef = React.useRef();

  React.useEffect(() => {  
    const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 800,
      glare: true,
      'max-glare': 0.5,
    });
    return () => tiltNode.vanillaTilt.destroy();
  },[]);

  return (
    <div>
      <img ref={tiltRef} src={logo} alt="logo" width="350px" className="logo"/>
      <h1 className="about">
        The Imperial Forces -- under orders from cruel Darth Vader (David
        Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts
        to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark
        Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon,
        work together with the companionable droid duo R2-D2 (Kenny Baker) and
        C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel
        Alliance, and restore freedom and justice to the Galaxy.
      </h1>
    </div>
  );
}

export default About;
