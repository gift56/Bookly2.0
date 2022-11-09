import React from "react";
import { testimonials } from "../../utils/customerData";
import Circle from "../../assets/circle.png";
import Card from "./Card";

const Customers = () => {
  return (
    <section className="customersCon">
      <div className="contain">
        <div className="wrapper">
          <div className="titleArea">
            <h2>
              Don’t take our word for it. <span>Trust our Customers</span>
            </h2>
          </div>
          <div className="cardContainer">
            {testimonials.map(({ details, name }) => (
              <Card details={details} name={name} />
            ))}
          </div>
        </div>
      </div>
      <div className="circleCon">
        <img src={Circle} alt="/" />
      </div>
    </section>
  );
};

export default Customers;