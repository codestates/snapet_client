import React from "react";
import "./Singlepost.css";
import img from "../../../img/socute.jpg";

function Singlepost() {
  return (
    <>
      <div className="singlepost">
        <img className="singlepost-img" src={img}></img>
        <p className="singlepost-p">
          Hey Look at me! Little pretty doggy is Here!
        </p>
      </div>
    </>
  );
}

export default Singlepost;
