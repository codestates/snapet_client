import React, { useState, useEffect } from "react";
import "./Singlefeed.css";
import img from "../../img/socute.jpg";
import axios from "axios";

function Singlefeed({ post }) {
  // console.log(post);
  const [isEdit, setIsEdit] = useState(false);
  // const [value, setValue] = useState("Fucking");
  const [count, setCount] = useState(post.countLike);
  // useEffect()
  const handleEdit = () => {
    setIsEdit(!isEdit);

    axios
      .post(
        "http://3.36.74.126:5000/likePhoto",
        { photoId: post.id }
        // {
        //   headers: {
        //     //accessToken을 props로 받아와야서 넣어줘야함!
        //     Authorization: `Bearer ${accesstoken}`,
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // }
      )
      .then((res) => {
        console.log(res);
        axios.get("http://3.36.74.126:5000/feedPosts").then((res) => {
          setCount(count);
          console.log(res.data, "axios.get console.log");
        });
      })
      .catch((err) => console.log(err));
  };
  const handleSave = () => {
    setIsEdit(!isEdit);
    // setCount(count - 1);
    console.log(post.id, "aaaaaaaaaaaaaa");

    axios
      .post(
        "http://3.36.74.126:5000/likePhoto",
        { photoId: post.id }
        // {
        //   headers: {
        //     //accessToken을 props로 받아와야서 넣어줘야함!
        //     Authorization: `Bearer ${accesstoken}`,
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true,
        // }
      )
      .then((res) => {
        console.log(res);
        axios.get("http://3.36.74.126:5000/feedPosts").then((res) => {
          setCount(count);
          console.log(res.data, "axios.get console.log");
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="singlefeed">
      {isEdit ? ( //isEdit true이면 꽉찬하트
        <div className="singlefeed-edit">
          <i
            id="fa-heart"
            onClick={handleEdit}
            class="fas fa-heart fa fa-2x"
          ></i>
          <span id="singlefeed-count">{post.countLike}</span>
          <img className="singlefeed-img" src={img}></img>
          <p className="singlefeed-p">{post.content}</p>
        </div>
      ) : (
        //isEdit이 false이면 빈하트
        <div className="singlefeed-edit">
          <i id="fa-heart" onClick={handleSave} class="far fa-heart fa-2x"></i>
          <span id="singlefeed-count">{post.countLike}</span>
          <img className="singlefeed-img" src={img}></img>
          <p className="singlefeed-p">{post.content}</p>
        </div>
      )}
    </div>
  );
}

export default Singlefeed;
