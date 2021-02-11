import React from "react";
import { Link } from "react-router-dom";
import Id from "./Id";
import Singlepost from "./Singlepost";

import "../../Main";
import "./Feed.css";

function Feed() {
  return (
    <>
      <div className="mypage-body">
        <section className="mypage-bottom">
          <div className="mypage-bottom">
            <Id />
            <div className="post-container">
              <div className="post-row">
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
                <Singlepost className="post-single" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Feed;
