import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Btn from "../components/Btn";
import "../../App";
import "./Main.css";


function Main() {
  return (
    <>
      {/* <Header></Header> */}

      <body className="main-body">
        <div className="main-left">
          <img className="main-image" src="../main2.png" />
        </div>

        <div className="main-right">
          <div className="main-right-top">
            <p>
              Get your pet a perfect ID photo <br />
              Fully automatically,
            </p>
            <span>then go far beyond the AI</span>
          </div>
          <div className="main-right-middle">
            <Link to="/Upload">
              <img
                className="main-right-middle-uploadimg"
                src="https://www.gigabyte.com/FileUpload/Global/MicroSite/512/images/download-black.png"
              />
            </Link>
          </div>

          <p className="main-right-bottom-p">
            By uploading an image you hereby agree to our Terms of Service,
            <br />
            General Term & Conditions and Privacy Policy
          </p>
          <p className="main-right-bottom-span"></p>
        </div>
      </body>
      
    </>
  );
}

export default Main;
