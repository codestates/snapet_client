import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Singlefeed from "./Singlefeed";
import axios from "axios";

import "../Main";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://3.36.74.126:5000/feedPosts", {
        "Content - Type": "application / json",
        withCredentials: true,
      })
      .then(({ data }) => {
        setPosts(data);
      });
  });

  return (
    <>
      <div className="mypage-body">
        <section className="mypage-bottom">
          <div className="feed-container">
            <div className="feed-row">
              {/* <Singlefeed className="feed-single" /> */}
              {posts.map((post) => (
                //console.log(post)
                <Singlefeed key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Feed;
