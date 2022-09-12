import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import "../sass/form.scss";

const Forms = () => {
  return (
    <div>
      <Header btnText="get started" linkText="getstarted" />
      <Login />
    </div>
  );
};

export default Forms;
