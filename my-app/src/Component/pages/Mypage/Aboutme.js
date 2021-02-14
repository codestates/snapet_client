import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../Main";
import "./Aboutme.css";
import Id from "./Id";

function Aboutme({ userInfo }) {
  // const [p, setIsPEdit] = useState("Lorem Ipsum");
  const [isinEditMode, setIsEditMode] = useState(false); //저장버튼 텍스트박스관리
  const [textValue, settextValue] = useState(userInfo.description);
  const [posts, setPosts] = useState([]);
  //console.log(userInfo);
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IlJhYmJpdCIsImVtYWlsIjoiam9qb0BnbWFpbC5jb20iLCJwcm9maWxlcGF0aCI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsImlhdCI6MTYxMzMxNzU3MCwiZXhwIjoxNjEzMzM1NTcwfQ.GgIK9V_QL_G8qWQ7RwR2QvgzXzRmB4skY7CzCoBoJQo";

  const handlerTextValue = (e) => {
    settextValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEditMode(!isinEditMode);
  };
  //console.log(userInfo);
  const handleSave = () => {
    axios
      .put(
        "http://3.36.74.126:5000/updateAboutMe",
        { description: textValue },
        {
          headers: {
            //accessToken을 props로 받아와야서 넣어줘야함!
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        axios
          .get("http://3.36.74.126:5000/userInfo", {
            headers: {
              //accessToken을 props로 받아와야서 넣어줘야함!
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then(({ data }) => {
            //console.log(data);
            setPosts(data);
            settextValue(data.description);
          });
        console.log(res);
      })
      .catch((err) => console.log(err));

    setIsEditMode(!isinEditMode);
  };

  return (
    <div className="aboutme">
      <section className="aboutme-head">
        <div className="aboutme-id">
          <Id />
        </div>

        <div className="aboutme-body">
          <section className="aboutme-bottom">
            <div className="aboutme-info">
              <div className="container">
                {isinEditMode ? (
                  <div>
                    {/*true*/}
                    <textarea
                      className="textvalue"
                      type="text"
                      onChange={handlerTextValue}
                      value={textValue}
                    />
                    <button className="btn" onClick={handleSave}>
                      save
                    </button>
                  </div>
                ) : (
                  <div className="aboutme-edit">
                    <div className="textvalue">{userInfo.description}</div>
                    {/*false*/}
                    <button className="btn" onClick={handleEdit}>
                      edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
