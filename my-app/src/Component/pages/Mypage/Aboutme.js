import { Divider } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../Main";
import "./Aboutme.css";
import Id from "./Id";

function Aboutme() {
  // const [p, setIsPEdit] = useState("Lorem Ipsum");
  const [isinEditMode, setIsEditMode] = useState(false); //저장버튼 텍스트박스관리
  const [textValue, settextValue] = useState("Hey, Edit here!");

  const handlerTextValue = (e) => {
    settextValue(e.target.value);
  };

  const handleEdit = () => {
    // setIsTitleEdit(<input type="text" />);
    // setIsPEdit(<input className="btn" type="text" />);
    setIsEditMode(!isinEditMode);
  };
  const handleSave = () => {
    setIsEditMode(!isinEditMode);
  };

  // function access() {
  //   axios
  //     .get("https://localhost:4000/", {
  //       headers: {
  //         Authorization: `Bearer ${tocken}`,
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       const { createdAt, userId, email } = res.data.data.userInfo;
  //       this.setState({ userId, createdAt, email });
  //     });
  // }

  return (
    <div className="aboutme">
      <section className="aboutme-head">
        <div className="aboutme-id">
          <Id />
        </div>

        <div className="aboutme-body">
          <section className="aboutme-bottom">
            <div className="aboutme-info">
              <div className="container">
                {isinEditMode ? (
                  <div>
                    {/*false*/}
                    <textarea
                      className="textvalue"
                      type="text"
                      onChange={handlerTextValue}
                      value={textValue}
                    />
                    <button className="btn" onClick={handleSave}>
                      save
                    </button>
                  </div>
                ) : (
                  <div className="aboutme-edit">
                    <div className="textvalue">{textValue}</div>
                    {/*true*/}
                    <button className="btn" onClick={handleEdit}>
                      edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
