import React from "react";
import Customers from "../components/Customers";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Welcome from "../components/Welcome";
import "../sass/Header.scss";

const Home = () => {
  return (
    <>
      <Header btnText="Login" />
      <Welcome />
      <Features rowId="1" title="Top Features" />
      <Features rowId="2" title="New Arrivals" />
      <Customers />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
