import React, { useState } from "react";
import Image from "../../assets/loginImg.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const footerLinks = [<FaGoogle />, <FaApple />, <FaFacebookF />];
  const navigate = useNavigate();
  const { logIn } = UserAuth();

  const showPassword = () => {
    setEye(!eye);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/page/account");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
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
              <form className="myForm" onSubmit={handleSubmit}>
                {error ? (
                  <p className="error">{error}</p>
                ) : null}
                <div className="formControl">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
                <div className="formControl">
                  <label htmlFor="password">Password</label>
                  <input
                    type={!eye ? "password" : "text"}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                  />
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
                  Don???t have an account? <Link to="/getstarted">Sign Up</Link>
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