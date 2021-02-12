import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";
import "./Upload.css";

function Upload() {
  return (
    <>
      <div className="upload">
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
                <Link to="/signin">
                  <button className="post-modal">Post</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Upload;
