import React from "react";
import { Link } from "react-router-dom";
import Id from "./id";
import Aboutme from "./aboutme";
import Post from "./post";

import "../../Main";
import "./Mypage.css";

function Mypage() {
  return (
    <>
      <body className="mypage-body">
        <section className="mypage-bottom">
          {/* <div className="mypage-bottom-post" to="/post"> */}
          <div className="mypage-bottom">
            <Id />
            <div className="mypage_mid">
              <Link className="mypage_post" to={Post}>
                Post
              </Link>
              <Link className="mypage_aboutme" to={Aboutme}>
                About Me
              </Link>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Mypage;
