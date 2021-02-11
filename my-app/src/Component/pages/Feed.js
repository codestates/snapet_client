import React from "react";
import { Link } from "react-router-dom";
import Singlefeed from "./Singlefeed";

import "../Main";
import "./Feed.css";

function Feed() {
  return (
    <>
      <div className="mypage-body">
        <section className="mypage-bottom">
          <div className="feed-container">
            <div className="feed-row">
              <Singlefeed className="feed-single" />
              <Singlefeed className="feed-single" />
              <Singlefeed className="feed-single" />
              <Singlefeed className="feed-single" />
              <Singlefeed className="feed-single" />
              <Singlefeed className="feed-single" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Feed;
