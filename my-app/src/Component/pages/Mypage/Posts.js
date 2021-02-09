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
            <div className="mid-container">
              {/* <div className="mypage_mid">
                <Link className="mypage_post" to="/mypage/posts">
                  Posts
                </Link>
                <Link className="mypage_aboutme" to="/mypage/about">
                  About Me
                </Link>
              </div> */}
            </div>
            <Singlepost />
          </div>
        </section>
      </div>
    </>
  );
}

export default Posts;
