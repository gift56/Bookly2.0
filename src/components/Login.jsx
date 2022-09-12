import React from "react";
import Image from "../images/loginImg.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

const Login = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Login;
