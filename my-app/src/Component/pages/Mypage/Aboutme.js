import { Divider } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "../../Main";
import "./Aboutme.css";
import Id from "./Id";

function Aboutme() {
  return (
    <div className="body">
      <section className="aboutme-head">
        {/* <div className="mypage-bottom-post" to="/post"> */}
        <div className="aboutme-id">
          <Id />
        </div>

        <div className="aboutme-body">
          <section className="aboutme-bottom">
            <div className="aboutme-info">
              <h1 className="h1-title">title</h1>
              <p className="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Ratione modi quisquam maxime labore, dolores voluptates
                architecto facere doloribus, <br />
                hic et rerum mollitia deleniti pariatur alias velit obcaecati.
                Veritatis, laboriosam eveniet.
              </p>
              <button>edit</button>
              <button>save</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
