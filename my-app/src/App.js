import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Component/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./Component/HomePage/Home";
import TheTeam from "./Component/TeamPage/TheTeam";
// import Mypage from "./Component/pages/Mypage/Mypage";
import Aboutme from "./Component/pages/Mypage/Aboutme";
import Upload from "./Component/pages/Upload.js";
import Auth from "./Component/Auth/Auth";
import Feed from "./Component/pages/Feed";
import Post from "./Component/pages/Mypage/Posts";
import SignIn from "./Component/Auth/SignIn";

// import { useStateValue } from "./Component/StateProvider";

function App() {
  const [accessToken, setAccesstoken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo2, setuserInfo] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibmFtZSI6IlJhYmJpdCIsImVtYWlsIjoiam9qb0BnbWFpbC5jb20iLCJwcm9maWxlcGF0aCI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTRUMDk6MzQ6MTkuMDAwWiIsImlhdCI6MTYxMzMxNzU3MCwiZXhwIjoxNjEzMzM1NTcwfQ.GgIK9V_QL_G8qWQ7RwR2QvgzXzRmB4skY7CzCoBoJQo";

  useEffect(() => {
    axios
      .get("http://3.36.74.126:5000/userInfo", {
        headers: {
          //accessToken을 props로 받아와야서 넣어줘야함!
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        //console.log(data);
        setuserInfo(data);
        //console.log(userInfo);
      });
  });

  const loginHandler = (data) => {
    setIsLogin({ isLogin: true });
    // issueAccessToken(data.data.accessToken);
    setAccesstoken(data);
  };

  const issueAccessToken = (token) => {
    setAccesstoken(token);
  };

  // {
  //   isLogin ? (
  //     <Mypage accessToken={accessToken} issueAccessToken={issueAccessToken} />
  //   ) : (
  //     <Login loginHandler={loginHandler} />
  //   );
  // }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/theteam" component={TheTeam} />
        <Route path="/mypage/posts" component={Post} />
        <Route
          path="/mypage/about"
          // component={Aboutme}
          render={() => {
            return <Aboutme userInfo={userInfo2} />;
          }}
        />
        <Route path="/upload" component={Upload} />
        <Route
          path="/signin"
          component={Auth}
          render={() => <SignIn loginHandler={loginHandler} />}
        />

        <Route path="/feed" component={Feed} />
        <Route
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/" />;
            }
            return <Redirect to="/signin" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
