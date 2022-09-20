import React, { useState } from "react";
import Image from "../assets/loginImg.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [eye, setEye] = useState(false);
  const footerLinks = [<FaGoogle />, <FaApple />, <FaFacebookF />];
  const navigate = useNavigate();
  const { logIn } = UserAuth();

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
              <div>
                <Link to="/">
                  <CgCloseO className="closeIcon" />
                </Link>
              </div>
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
                <div className="rememeberArea">
                  <div className="remaind">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember password</label>
                  </div>
                  <Link to="/forgetpassword">Forgot Password?</Link>
                </div>
                <Button text="Submit" className="submit" />
                <p>
                  Don’t have an account? <Link to="/getstarted">Sign Up</Link>
                </p>
              </form>
            </div>
            <div className="rightSide">
              <img src={Image} alt="/" />
            </div>
          </div>
          <div className="formFooter">
            <h4>Or continue with</h4>
            <div className="footerLinks">
              {footerLinks.map((links, index) => (
                <div className="linkCard" key={index}>
                  {links}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
