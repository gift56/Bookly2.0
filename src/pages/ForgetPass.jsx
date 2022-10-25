import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/FPImg.svg";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { CgCloseO } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email === "") {
      setError("please enter this field");
    } else {
      navigate("/resetpassword");
      setEmail("");
    }
  };
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
              <form className="myForm" onSubmit={handleSubmit}>
                <div className="formControl">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <span>{error}</span>}
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
