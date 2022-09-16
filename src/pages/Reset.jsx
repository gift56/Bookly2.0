import React, { useState } from "react";
import Header from "../components/Header";
import Image from "../assets/resetImg.svg";
import PassImg from "../assets/passreset.svg";
import Button from "../components/Button";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../sass/form.scss";

const Reset = () => {
  const [eye, setEye] = useState(false);
  const [confirmEye, setConfirmEye] = useState(false);
  return (
    <>
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
                <div className="title ">
                  <img src={PassImg} alt="/" />
                  <h2>RESET PASSWORD</h2>
                </div>
                <p className="paragraph">
                  We have just sent a verification code to your email. Please
                  <span>enter the email below.</span>
                </p>
              </div>
              <form className="myForm">
                {/* onSubmit={handleSubmit} */}
                <div className="formControl">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
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
    </>
  );
};

export default Reset;
