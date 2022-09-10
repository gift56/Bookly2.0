import React from "react";
import FooterLg from "../assets/ftLg.png";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  const catergoriesLinks = [
    "Senior School 1",
    "Senior School 2",
    "Senior School 3",
    "Senior School 1",
    "Senior School 2",
    "Senior School 3",
    "Senior School 2",
    "Senior School 1",
  ];
  return (
    <footer>
      <div className="contain">
        <div className="footerWrap">
          <div className="backtoTop">
            <a href="#Home">
              <HiOutlineChevronDoubleUp />
              <span>BACK TO TOP</span>
            </a>
          </div>
          <div className="footerRows">
            <div className="footerCol">
              <div className="ftLogo">
                <img src={FooterLg} alt="footerLg" />
              </div>
              <p>
                <span>Lorem ipsum dolor sit</span>
                <span>consectetur adipiscing</span>
                <span>sed do eiusmod tempor</span>
                <span>incididunt ut labore et</span>
                <span>magna aliqua. Ut enim</span>
                <span> minim veniam.</span>
              </p>
            </div>
            <div className="footerCol">
              <h3>Catatogues</h3>
              <ul className="list">
                {catergoriesLinks.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
