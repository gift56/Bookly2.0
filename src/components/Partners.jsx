import React from "react";
import Jumia from "../assets/jumia.svg";
import Jiji from "../assets/jiji.svg";
import Amazon from "../assets/amazon.svg";
import Shopify from "../assets/shopify.svg";
import Shoprite from "../assets/shoprite.svg";
import Justrite from "../assets/justrite.svg";

const Partners = () => {
  const clientsImages = [
    Jumia,
    Jiji,
    Amazon,
    Shopify,
    Shoprite,
    Justrite,
  ];
  return (
    <section className="partners">
      <div className="contain">
        <div className="partnersCon">
          <h2>Partners</h2>
          <div className="clientsCon">
            {clientsImages.map((client, index) => (
              <div key={index} className="images">
                <img src={client} alt="/" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
