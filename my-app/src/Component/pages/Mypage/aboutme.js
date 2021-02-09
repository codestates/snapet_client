import React from "react";
import { Link } from "react-router-dom";

import "../../Main";
import "./aboutme.css";
import Id from "./id";

function Mypage() {




  return (
    <>
      <body className="aboutme-body">
        <section className="aboutme-bottom">
          {/* <div className="mypage-bottom-post" to="/post"> */}
          <div className="aboutme-bottom">
            <Id />
          </div>
          <div className="mid-container">
            <div className="aboutme_mid">

              <Link className="aboutme_post" to='/mypage/posts'>
                Posts
              </Link>
              <Link className="aboutme_aboutme" to='/mypage/about'>
                About Me
              </Link>
            </div>
            </div>
            <div className="aboutme-body">
              <section className="aboutme-bottom">
                <div className="aboutme-info">
                  <h1 className='h1-title'>title</h1>
                  <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                      Ratione modi quisquam maxime labore, dolores voluptates architecto facere doloribus, <br />
                      hic et rerum mollitia deleniti pariatur alias velit obcaecati. Veritatis, laboriosam eveniet.</p>
                  <button>edit</button>
                <button>save</button>
                </div>
              </section>

            </div>

        </section>
      </body>

    </>
  );
}

export default Mypage;
