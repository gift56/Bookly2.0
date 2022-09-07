import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import "../sass/Header.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
};

export default Home;
