import React from "react";
import { Link } from "react-router-dom";

import "../../Main";
import "./Mypage.css";

function Mypage() {
  return (
    <>
      <body className="mypage-body">
        <section className="mypage-bottom">
          <div className="aboutme-info">
            <h3>title</h3>
            <p></p>
            <button>글쓰기</button>
            <button>수정하기</button>
            <button>저장하기</button>
          </div>
        </section>
      </body>
    </>
  );
}

export default Mypage;
