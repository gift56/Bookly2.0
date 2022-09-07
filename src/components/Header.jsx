import React from "react";
import Logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import Button from "./Button";

const Header = () => {
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
      </nav>
    </header>
  );
};

export default Header;
