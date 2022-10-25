import React, { useState } from "react";
import Header from "../components/Header/Header";
import Image from "../assets/signupImg.svg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Useform from "../components/FormData/UseForm";

const SignUp = () => {
  const [eye, setEye] = useState(false);
  const [confirmEye, setConfirmEye] = useState(false);
  const { handleChange, handleSubmit, values, errors } = Useform();

  const footerLinks = [<FaGoogle />, <FaApple />, <FaFacebookF />];

  const showPassword = () => {
    setEye(!eye);
  };
  const confirmShowPassword = () => {
    setConfirmEye(!confirmEye);
  };

  return (
    <div>
      <Header btnText="login" linkText="login" />
      <div className="contain">
        <div className="formWrapper">
          <div className="formHeader">
            <div className="titleArea">
              <div className="title">
                <AiOutlineUserAdd className="add" />
                <h2>SIGN UP</h2>
              </div>
              <div>
                <Link to="/">
                  <CgCloseO className="closeIcon" />
                </Link>
              </div>
            </div>
            <p>
              Become a member. You’ll enjoy exclusive deals, offers and rewards.
            </p>
          </div>
          <div className="formContainer">
            <div className="leftSide">
              <form className="myForm signup" onSubmit={handleSubmit}>
                <div className="formControl">
                  <label htmlFor="name">
                    Full Name
                    {errors.name && (
                      <span className="error deskErr">{errors.name}</span>
                    )}
                  </label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                  />
                  {errors.name && (
                    <p className={`error mobileErr`}>{errors.name}</p>
                  )}
                </div>
                <div className="formControl">
                  <label htmlFor="tel">
                    Mobile Number
                    {errors.tel && (
                      <span className="error deskErr">{errors.tel}</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    value={values.tel}
                    onChange={handleChange}
                    name="tel"
                  />
                  {errors.name && (
                    <p className={`error mobileErr`}>{errors.name}</p>
                  )}
                </div>
                <div className="formControl">
                  <label htmlFor="email">
                    Email
                    {errors.email && (
                      <span className="error deskErr">{errors.email}</span>
                    )}
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                  />
                  {errors.name && (
                    <p className={`error mobileErr`}>{errors.name}</p>
                  )}
                </div>
                <div className="formControl">
                  <label htmlFor="password">
                    Password
                    {errors.password && (
                      <span className="error deskErr">{errors.password}</span>
                    )}
                  </label>
                  <input
                    type={!eye ? "password" : "text"}
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                  />
                  {errors.name && (
                    <p className="error mobileErr">{errors.password}</p>
                  )}
                  <div className="show">
                    {!eye ? (
                      <BsEyeSlash onClick={showPassword} />
                    ) : (
                      <BsEye onClick={showPassword} />
                    )}
                  </div>
                </div>
                <div className="formControl">
                  <label htmlFor="confirmPass">
                    Re-enter password
                    {errors.confirmPass && (
                      <span className="error deskErr">
                        {errors.confirmPass}
                      </span>
                    )}
                  </label>
                  <input
                    type={!confirmEye ? "password" : "text"}
                    value={values.confirmPass}
                    onChange={handleChange}
                    name="confirmPass"
                  />
                  {errors.confirmPass && (
                    <p className="error mobileErr">{errors.confirmPass}</p>
                  )}
                  <div className="show">
                    {!confirmEye ? (
                      <BsEyeSlash onClick={confirmShowPassword} />
                    ) : (
                      <BsEye onClick={confirmShowPassword} />
                    )}
                  </div>
                </div>
                <p className="terms">
                  By signing up, you agree to our{` `}
                  <span>Terms & Conditions</span> and{` `}
                  <span>Privacy policy.</span>
                </p>
                <Button text="Submit" className="submit" />
                <p>
                  Already have an account? <Link to="/login">Login</Link>
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

export default SignUp;
