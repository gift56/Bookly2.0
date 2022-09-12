import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Forms from "../pages/Forms";
import SignUp from "../pages/SignUp";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Forms />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Pages;
