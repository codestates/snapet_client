import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../img/logo_removed.png";
// import { Button } from "./Button";
// import { Avatar, IconButton } from '@material-ui/core'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav>
        <div>
          <Link to="/" className="header__logo" onClick={closeMobileMenu}>
            {/* snapet <i className="fab fa-typo3"></i> */}
            <img src={Logo} alt="snapet logo" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "header__menu active" : "header__menu"}>
            <li className="header__item">
              <Link
                to="/Feed"
                className="header__links"
                onClick={closeMobileMenu}
              >
                View Feed
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/theteam"
                className="header__links"
                onClick={closeMobileMenu}
              >
                The Team
              </Link>
            </li>
            <li className="header__item">
              <Link
                to="/mypage/posts"
                className="header__links"
                onClick={closeMobileMenu}
              >
                My Page
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="header__links__mobile"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>

            {/* <li className="nav-item">

                            <Avatar />
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}></Link>
                        </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
