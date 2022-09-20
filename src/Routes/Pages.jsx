import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Forms from "../pages/Forms";
import SignUp from "../pages/SignUp";
import ForgetPass from "../pages/ForgetPass";
import Reset from "../pages/Reset";
import Account from "../pages/Account";
import NotFound from "../pages/NotFound";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Forms />} />
        <Route path="/getstarted" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/resetpassword" element={<Reset />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Pages;
