import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="nav-image" src="../logo removed.png" />
      </Link>

      <div className="nav-body">
        <Link className="nav-viewfeed" /*Onclick={closeMobileMenu}*/ to="/Post">
          View Feed
        </Link>
        <Link className="nav-signin" to="/Signin">
          Signin
        </Link>
        <Link>
          <Avatar className="nav-profileimg" to="/Mypage" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
