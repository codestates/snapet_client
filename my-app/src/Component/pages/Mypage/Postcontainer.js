import React from "react";
import { Link } from "react-router-dom";
import Singlepost from "./Singlepost";

import "../../Main";
import "./Posts.css";

function Postcontainer() {
  return (
    <>
      <body className="mypage-body">
        <section className="mypage-top">
          <div className="mypage-top-left"></div>
          <div className="mypage-top-right">
            <h3 className="title-post">Post</h3>
            <h3 className="title-aboutme">About Me</h3>
          </div>
        </section>
        <section className="mypage-bottom">
          <div>
            <div className="mypage-bottom-post" to="/post">
<<<<<<< HEAD:my-app/src/Component/pages/Mypage/Postcontainer.js
              {/* {windownwidth > 1440 ? singlepost 3 : flexwrap } */}

              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
              <SinglePost />
=======
              
                {/* {windownwidth > 1440 ? singlepost 3 : flexwrap } */}
              
              {/* <SinglePost/ > */}
              {/* <SinglePost/ > */}
              {/* <SinglePost/ > */}
              {/* <SinglePost/ > */}
              {/* <SinglePost/ > */}
>>>>>>> 621681da8dd5fa8a90287c873826f0c5c6dc95db:my-app/src/Component/pages/Mypage/post.js
              <div className="single-post">
                <img></img>
                <p></p>
              </div>
            </div>
            <div className="mypage-bottom-aboutme" to="/Mypage">
              <div className="aboutme-info">
                <h3>title</h3>
                <p></p>
                <button>글쓰기</button>
                <button>수정하기</button>
                <button>저장하기</button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Postcontainer;