import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const navlinks = ["home", "categories", "request a book", "cart"];
  return (
    <header>
      <nav className="contain">
        <div className="logo ">
          <img src={Logo} alt="logo" />
        </div>

        <ul>
          {navlinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <button>Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
