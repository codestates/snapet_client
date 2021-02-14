import React, { useState } from "react";
import "./Singlepost.css";
import img from "../../../img/socute.jpg";
import axios from "axios";

function Singlepost({ post }) {
  const [isinEditMode, setIsEditMode] = useState(false); //저장버튼 텍스트박스관리
  const [textValue, settextValue] = useState("Hey, Edit here!");

  const handlerTextValue = (e) => {
    settextValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEditMode(!isinEditMode);
  };
  const handleSave = () => {
    setIsEditMode(!isinEditMode);

    axios.put(
      "http://3.36.74.126:5000/editPostDescription",
      { filepath: post.filepath, content: textValue }
      // {
      //   headers: {
      //     //accessToken을 props로 받아와야서 넣어줘야함!
      //     Authorization: `Bearer ${accessToken}`,
      //     "Content-Type": "application/json",
      //   },
      //   withCredentials: true,
      // }
    );
  };
  const handleDelete = () => {
    setIsEditMode("");
    axios
      .post(
        "http://3.36.74.126:5000/deletePhoto",
        { filepath: post.filepath },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,

          //photo이름
        }
      )
      .then((res) => {
        console.log(res);
        // axios.get("http://3.36.74.126:5000/feedPosts").then((res) => {
        //   setCount(count);
        //   console.log(res.data, "axios.get console.log");
      })
      .catch((err) => console.log(err));
  };

  // const accessTokenRequest = () => {};

  return (
    <>
      <div className="singlepost">
        {isinEditMode ? ( //edit이 true일때
          <div className="singlepost-edit">
            {/*false*/}
            <img className="singlepost-img" src={img}></img>
            <textarea
              className="singlepost-textarea"
              type="text"
              onChange={handlerTextValue}
              value={post.content}
            />
            <i
              id="singlepost-btn"
              onClick={handleSave}
              class="far fa-save fa-2x"
            ></i>
            <i
              id="singlepost-delete"
              class="fas fa-trash-alt fa-2x"
              onClick={handleDelete}
            ></i>
          </div>
        ) : (
          //edit이 false일때
          <div className="singlepost-edit">
            <img className="singlepost-img" src={img}></img>
            <div className="singlepost-p">{post.content}</div>
            {/*true*/}

            <i
              id="singlepost-btn"
              onClick={handleEdit}
              class="far fa-edit fa-2x"
            ></i>
            <i
              id="singlepost-delete"
              class="fas fa-trash-alt fa-2x"
              onClick={handleDelete}
            ></i>
          </div>
        )}
        {/* <img className="singlepost-img" src={img}></img>
        <p className="singlepost-p">
          Hey Look at me! Little pretty doggy is Here!
        </p> */}
      </div>
    </>
  );
}

export default Singlepost;
