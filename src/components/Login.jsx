import React, { useState } from "react";
import Image from "../images/loginImg.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const Login = () => {
  const [eye, setEye] = useState(false);

  const showPassword = () => {
    setEye(!eye);
  };
  return (
    <div>
      <div className="contain">
        <div className="formWrapper">
          <div className="formHeader">
            <div className="titleArea">
              <div className="title">
                <HiOutlineUserCircle />
                <h2>LOGIN</h2>
              </div>
              <CgCloseO className="closeIcon" />
            </div>
            <p>Hi User, Welcome back to Bookly! We missed you</p>
          </div>
          <div className="formContainer">
            <div className="leftSide">
              <form className="myForm">
                <div className="formControl">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
                </div>
                <div className="formControl">
                  <label htmlFor="password">Password</label>
                  <input type={!eye ? "password" : "text"} />
                  <div className="show">
                    {!eye ? (
                      <BsEyeSlash onClick={showPassword} />
                    ) : (
                      <BsEye onClick={showPassword} />
                    )}
                  </div>
                </div>
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

export default Login;
