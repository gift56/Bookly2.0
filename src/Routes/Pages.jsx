import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Forms from "../pages/Forms";
import SignUp from "../pages/SignUp";
import ForgetPass from "../pages/ForgetPass";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Forms />} />
        <Route path="/getstarted" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
      </Routes>
    </>
  );
};

export default Pages;
