import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Id from "./Id";
// import Aboutme from "./Aboutme";
// import Post from "./Posts";
import Singlepost from "./Singlepost";
import axios from "axios";

import "../../Main";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IlJhYmJpdCIsImVtYWlsIjoiam9qb0BnbWFpbC5jb20iLCJwcm9maWxlcGF0aCI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsImlhdCI6MTYxMzMxMzAwMCwiZXhwIjoxNjEzMzMxMDAwfQ.X9df9btHQDMBebH8w0BQnO0DUjofuuz5T8cVLajvYKw";

  useEffect(() => {
    axios
      .get("http://3.36.74.126:5000/mypagePosts", {
        headers: {
          //accessToken을 props로 받아와야서 넣어줘야함!
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        setPosts(data);
      });
  });

  const handleuserinfo = () => {};

  const singlePostList = () => {};

  return (
    <>
      <div className="mypage-body">
        <section className="mypage-bottom">
          {/* <div className="mypage-bottom-post" to="/post"> */}
          <div className="mypage-bottom">
            <Id onChange={handleuserinfo} />
            <div className="post-container">
              <div className="post-row">
                {posts.map((post) => (
                  //console.log(post)
                  <Singlepost key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Posts;
