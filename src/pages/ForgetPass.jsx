import React from "react";
import Image from "../assets/FPImg.svg";
import Header from "../components/Header";
import Button from "../components/Button";
import { CgCloseO } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../sass/form.scss";

const ForgetPass = () => {
  return (
    <div>
      <Header btnText="get started" linkText="getstarted" />
      <div className="contain">
        <div className="formWrapper">
          <div className="formHeader">
            <div className="titleArea">
              <Link to="/login">
                <BsArrowLeftCircle className="closeIcon" />
              </Link>
              <div>
                <Link to="/">
                  <CgCloseO className="closeIcon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="formContainer">
            <div className="leftSide passwordArea">
              <div className="titlewelcomeP">
                <div className="title">
                  <BiLock className="icon" />
                  <h2>FORGOT PASSWORD</h2>
                </div>
                <p className="paragraph">
                  Please enter the email you used to create your account and we
                  <span>will send you a link to reset your password</span>
                </p>
              </div>
              <form className="myForm">
                <div className="formControl">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
                </div>
                <Button text="Submit" className="submit" />
                <p>
                  Return to <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
            <div className="rightSide">
              <img src={Image} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
