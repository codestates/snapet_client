import React, { useState, useEffect } from "react";
import "./Singlefeed.css";
import img from "../../img/socute.jpg";
import axios from "axios";

function Singlefeed() {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("Hey, Edit here!");
  const [count, setCount] = useState(0);

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setCount(count + 1);
  };
  const handleSave = () => {
    setIsEdit(!isEdit);
    setCount(count - 1);
  };
  return (
    <div className="singlefeed">
      {isEdit ? ( //isEdit true이면 꽉찬하트
        <div className="singlefeed-edit">
          <i
            id="fa-heart"
            onClick={handleSave}
            class="fas fa-heart fa fa-2x"
          ></i>
          <span id="singlefeed-count">{count}</span>
          <img className="singlefeed-img" src={img}></img>
          <p className="singlefeed-p">{value}</p>
        </div>
      ) : (
        //isEdit이 false이면 빈하트
        <div className="singlefeed-edit">
          <i id="fa-heart" onClick={handleEdit} class="far fa-heart fa-2x"></i>
          <span id="singlefeed-count">{count}</span>
          <img className="singlefeed-img" src={img}></img>
          <p className="singlefeed-p">{value}</p>
        </div>
      )}
    </div>
  );
}

export default Singlefeed;
