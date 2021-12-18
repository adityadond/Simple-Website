import React from "react";
//import web from "../src/images/s4.svg";
import Card from "./Card";
import Sdata from './Sdata'
function Services() {
  return (
    <div>
      <div classNameName="my-5">
        <h1 classNameName="text-center">Our Services</h1>
      </div>
      <div classNameName="container-fluid mb-5">
        <div classNameName="row">
          <div classNameName="col-10 mx-auto">
            <div classNameName="row gy-4">
              {Sdata.map((val,index)=>{
                  return <Card key={index} imgsrc={val.imgsrc} title={val.title}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
