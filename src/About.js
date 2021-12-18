import React from "react";

import web from "../src/images/s5.svg";

import Common from "./Common";

function About() {
  return (
    <div>
      <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname="Contact Now"/>
    </div>
  );
}

export default About;
