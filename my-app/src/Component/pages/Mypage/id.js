import React from "react";
import { Link } from "react-router-dom";
import "./id.css";
import { Avatar } from "@material-ui/core";
import mockup from "../../../img/profile.png";

function Id() {
  return (

    <nav className="post__container">
      <div className="post">
        <div className="id-left">
          <Avatar style={{ height: "80px", width: "80px", }} src={mockup} />

          {/* 구글로그인이 들어가면 src={photo.urlPhoto} */}
        </div>
        <div className="id-right">
          <h4 className="userid">emilyscone</h4>
          <p className="description">description here yesssssssss</p>
        </div>
      </div>
    </nav>
  );
}

export default Id;
