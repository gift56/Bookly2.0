import React from "react";
import Customers from "../components/Home/Customers";
import Features from "../components/Home/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Partners from "../components/Home/Partners";
import Welcome from "../components/Home/Welcome";
import "../sass/Header.scss";

const Home = () => {
  return (
    <>
      <Header btnText="login" linkText="login" />
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
