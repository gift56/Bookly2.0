import React from "react";
import Features from "../components/Features";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import "../sass/Header.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Features />
    </>
  );
};

export default Home;
