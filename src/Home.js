import React from "react";

import Common from "./Common";
import web from "../src/images/s1.svg";
function Home() {
  return <div>
       <Common name='Grow your buissness ' imgsrc={web} visit='/service' btname="Get Started"/>
  </div>;
}

export default Home;
