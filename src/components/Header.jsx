import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import Button from "./Button";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <nav className="contain desktopNav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="ul">
          <li>Home</li>
          <li>Categories</li>
          <li>Request a book</li>
          <li>
            Cart <img src={cart} alt="/" />
          </li>
          <Button text="Login" className="loginbtn" />
        </ul>
        <div onClick={() => setShow((prev) => !prev)} className="toggle">
          {show ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      <nav className={`mobileNav ${show ? "normal" : "left"}`}>
        <ul className="ul">
          <li>Home</li>
          <li>Categories</li>
          <li>Request a book</li>
          <li>
            Cart <img src={cart} alt="/" />
          </li>
          <Button text="Login" className="loginbtn pb" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
