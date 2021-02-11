import React, { useState, useEffect } from "react";
import "./Singlepost.css";
import img from "../../../img/socute.jpg";

function Singlepost() {
  const [isinEditMode, setIsEditMode] = useState(false); //저장버튼 텍스트박스관리
  const [textValue, settextValue] = useState("Hey, Edit here!");
  const handlerTextValue = (e) => {
    settextValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEditMode(!isinEditMode);
  };
  const handleSave = () => {
    setIsEditMode(!isinEditMode);
  };
  const handleDelete = () => {
    setIsEditMode("");
  };

  return (
    <>
      <div className="singlepost">
        {isinEditMode ? (
          <div className="singlepost-edit">
            {/*false*/}
            <img className="singlepost-img" src={img}></img>
            <textarea
              className="singlepost-textarea"
              type="text"
              onChange={handlerTextValue}
              value={textValue}
            />
            <i
              id="singlepost-btn"
              onClick={handleSave}
              class="far fa-save fa-2x"
            ></i>
            <i
              id="singlepost-delete"
              class="fas fa-trash-alt fa-2x"
              // onClick={}
            ></i>
          </div>
        ) : (
          <div className="singlepost-edit">
            <img className="singlepost-img" src={img}></img>
            <div className="singlepost-p">{textValue}</div>
            {/*true*/}

            <i
              id="singlepost-btn"
              onClick={handleEdit}
              class="far fa-edit fa-2x"
            ></i>
            <i
              id="singlepost-delete"
              class="fas fa-trash-alt fa-2x"
              // onClick={}
            ></i>
          </div>
        )}
        {/* <img className="singlepost-img" src={img}></img>
        <p className="singlepost-p">
          Hey Look at me! Little pretty doggy is Here!
        </p> */}
      </div>
    </>
  );
}

export default Singlepost;
