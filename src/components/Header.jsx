import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="contain">
        <div className="logo ">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
