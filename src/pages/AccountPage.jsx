import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import "../sass/account.scss";

const AccountPage = () => {
  const [show, setShow] = useState(false);
  const AccountLinks = [
    {
      img: "",
      name: "My Account",
    },
    {
      img: "",
      name: "Orders",
    },
    {
      img: "",
      name: "Saved items",
    },
  ];
  return (
    <>
      <header id="Home" className="accHead">
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
            <Button text="My Account" className="loginbtn" />
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
            <Button text="My Account" className="loginbtn" />
          </ul>
        </nav>
        <div className="dropdown">
          <ul className="dropdownList">
            <Button text="Log Out" className="loginbtn" />
            {AccountLinks.map(({ img, name }, index) => (
              <li key={index}>
                <img src="" alt="" />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default AccountPage;
