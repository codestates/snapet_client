import React, { useState, useEffect } from "react";
import "./Singlefeed.css";
import img from "../../img/socute.jpg";

function Singlefeed() {
  const [value, setValue] = useState("Hey, Edit here!");

  return (
    <div className="singlefeed">
      <div className="singlefeed-edit">
        {/*false*/}
        <img className="singlefeed-img" src={img}></img>
        <p className="singlefeed-p">{value}</p>
      </div>
    </div>
  );
}

export default Singlefeed;
