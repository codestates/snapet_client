import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Id.css";
import { Avatar } from "@material-ui/core";
import axios from "axios";

//axios.get사용 해서 userinfo의 img와 name 을 받아와야함

function Id() {
  const [posts, setPosts] = useState([]);

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IlJhYmJpdCIsImVtYWlsIjoiam9qb0BnbWFpbC5jb20iLCJwcm9maWxlcGF0aCI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsImlhdCI6MTYxMzMxNTcyMywiZXhwIjoxNjEzMzMzNzIzfQ.juqr1JTSIFLTO6iO2ASrzlIhZQAmPXV_yDjDnwPggWI";

  useEffect(() => {
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
      });
  });

  return (
    <nav className="post__container">
      <div className="post">
        <div className="id-left">
          <Avatar
            style={{ height: "80px", width: "80px" }}
            src={posts.profileimg}
          />
          {/* 구글로그인이 들어가면 src={photo.urlPhoto} */}
        </div>
        <div className="id-right">
          <h4 className="userid">{posts.username}</h4>
          <p className="description"></p>
        </div>
      </div>
      <div className="mypage_mid">
        <Link className="mypage_post" to="/mypage/posts">
          Posts
        </Link>
        <Link className="mypage_aboutme" to="/mypage/about">
          About Me
        </Link>
      </div>
    </nav>
  );
}

export default Id;
