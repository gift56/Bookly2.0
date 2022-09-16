import React, { useState } from "react";
import Header from "../components/Header";
import Image from "../assets/resetImg.svg";
import AvatarGirl from "../assets/avatarImg.svg";
import PhoneImg from "../assets/phoneImg.svg";
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
  const [showModal, setShowModal] = useState(false);

  const showPassword = () => {
    setEye(!eye);
  };
  const confirmShowPassword = () => {
    setConfirmEye(!confirmEye);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <Header btnText="get started" linkText="getstarted" />
      <div className="contain">
        <div className="formWrapper">
          <div className="formHeader">
            <div className="titleArea">
              <Link to="/forgetpassword">
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
              <form className="myForm resetForm" onSubmit={handleSubmit}>
                <div className="formControl">
                  <label htmlFor="password">Enter New Password</label>
                  <input type={!eye ? "password" : "text"} />
                  <div className="show">
                    {!eye ? (
                      <BsEyeSlash onClick={showPassword} />
                    ) : (
                      <BsEye onClick={showPassword} />
                    )}
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="repassword">Confirm New Password</label>
                  <input type={!confirmEye ? "password" : "text"} />
                  <div className="show">
                    {!confirmEye ? (
                      <BsEyeSlash onClick={confirmShowPassword} />
                    ) : (
                      <BsEye onClick={confirmShowPassword} />
                    )}
                  </div>
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
      <div className={`modal`}>
        <div className="card">
          <div className="Cardcontainer">
            <div className="images">
              <div>
                <img src={PhoneImg} alt="/" />
              </div>
              <div>
                <img src={AvatarGirl} alt="/" />
              </div>
            </div>
            <div className="textArea">
              <h3>Password changed successfully!</h3>
              <Link to="/login">Proceed to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
