import React from "react";
import { Link } from "react-router-dom";
import "./id.css";
import { Avatar } from "@material-ui/core";
import mockup from "../../../img/Rev 001 02.jpg";

function Id() {
  return (
    <nav className="post">
      <div className="id-left">
        <Avatar style={{ height: "70px", width: "70px" }} src={mockup} />
        {/* 구글로그인이 들어가면 src={photo.urlPhoto} */}
      </div>
      <div className="id-right">
        <h4 className="userid">userid</h4>
        <p className="nickname">nickname</p>
      </div>
    </nav>
  );
}

export default Id;
