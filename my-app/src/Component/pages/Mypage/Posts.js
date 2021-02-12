import React from "react";
// import { Link } from "react-router-dom";
import Id from "./Id";
// import Aboutme from "./Aboutme";
// import Post from "./Posts";
import Singlepost from "./Singlepost";

import "../../Main";
import "./Posts.css";

function Posts() {
  return (
    <>
      <div className="mypage-body">
        <section className="mypage-bottom">
          {/* <div className="mypage-bottom-post" to="/post"> */}
          <div className="mypage-bottom">
            <Id />
            <div className="post-container">
              <div className="post-row">
                {/* <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Posts;
