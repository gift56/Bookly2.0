import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = ({ btnText, linkText }) => {
  const [show, setShow] = useState(false);

  return (
    <header id="Home">
      <nav className="contain desktopNav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catergories">Categories</Link>
          </li>
          <li>
            <Link to="/request">Request a book</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart <img src={cart} alt="/" />
            </Link>
          </li>

          <Link to={`/${linkText}`}>
            <Button text={btnText} className="loginbtn" />
          </Link>
        </ul>
        <div onClick={() => setShow((prev) => !prev)} className="toggle">
          {show ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      <nav className={`mobileNav ${show ? "normal" : "left"}`}>
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catergories">Categories</Link>
          </li>
          <li>
            <Link to="/request">Request a book</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart <img src={cart} alt="/" />
            </Link>
          </li>
          <Link to={`/${linkText}`}>
            <Button text={btnText} className="loginbtn" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
