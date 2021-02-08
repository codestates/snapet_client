import React from "react";
import { Link } from "react-router-dom";
import "../App";
import "./Main.css";
import "./Upload.css";

function Upload() {
  return (
    <>
      {/* <Header /> */}
      <body className="upload">
        <section className="upload-body">
          <div className="upload-top">
            <button className="upload-body-top-changeImgBtn"></button>
            <div className="upload-body-top-p"></div>
          </div>
          <div className="upload-body-bottom">
            <div className="upload-body-bottom-left"></div>
            <div className="upload-body-bottom-right">
              <div className="upload-body-bottom-right-color"></div>
              <div className="upload-body-bottom-right-btns">
                <button className="download">Click</button>
                <Link to="/Modal">
                  <button className="post-modal">Post</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Upload;
