import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import user from "../../assets/user.svg";
import order from "../../assets/order.svg";
import heart from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const AcountHeader = () => {
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);

  const AccountLinks = [
    {
      img: user,
      name: "My Account",
    },
    {
      img: order,
      name: "Orders",
    },
    {
      img: heart,
      name: "Saved items",
    },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      const nav = document.querySelector("header");
      if (e.currentTarget.scrollY > 50) {
        nav.classList.add("nav__scrolled");
      } else {
        nav.classList.remove("nav__scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="Home" className="accHead">
      <nav className="contain desktopNav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="ul">
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/catergories">Categories</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/request">Request a book</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/cart">
              Cart <img src={cart} alt="/" />
            </Link>
          </li>
          <div
            onClick={() => {
              setDropDown((prev) => !prev);
              setShow(false);
            }}
          >
            <Button text="My Account" className="loginbtn" />
          </div>
        </ul>
        <div onClick={() => setShow((prev) => !prev)} className="toggle">
          {show ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      <nav className={`mobileNav ${show ? "normal" : "left"}`}>
        <ul className="ul">
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/catergories">Categories</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/request">Request a book</Link>
          </li>
          <li
            onClick={() => {
              setShow(false);
              setDropDown(false);
            }}
          >
            <Link to="/cart">
              Cart <img src={cart} alt="/" />
            </Link>
          </li>
          <div
            onClick={() => {
              setDropDown((prev) => !prev);
            }}
          >
            <Button text="My Account" className="loginbtn" />
          </div>
        </ul>
      </nav>
      <div className={`dropdown ${dropDown ? "d_flex" : "d-n"}`}>
        <div className="button">
          <Button text="Log Out" className="loginbtn" />
        </div>
        <ul className="dropdownList">
          {AccountLinks.map(({ img, name }, index) => (
            <li
              key={index}
              onClick={() => {
                setShow(false);
                setDropDown(false);
              }}
            >
              <img src={img} alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default AcountHeader;