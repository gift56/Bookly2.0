import React from "react";
import Customers from "../components/Customers";
import Features from "../components/Features";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Welcome from "../components/Welcome";
import "../sass/Header.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Features rowId="1" title="Top Features" />
      <Features rowId="2" title="New Arrivals" />
      <Customers />
      <Partners />
    </>
  );
};

export default Home;
