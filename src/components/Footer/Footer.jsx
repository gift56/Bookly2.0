import React from "react";
import FooterLg from "../../assets/ftLg.png";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import Button from "../Button/Button";

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
              <HiOutlineChevronDoubleUp size={30} />
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
            <div className="footerCol mt-8">
              <h3>Contact Us</h3>
              <div className="adress">
                <div className="firstP">
                  <p>543, Duke Avenue</p>
                  <p>Chicago, USA.</p>
                </div>
                <div className="secondP">
                  <p>+919 406 1234</p>
                  <p>dallaspizzaz@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="footerCol mt-8">
              <h3>Subscribe Us</h3>
              <form>
                <input type="email" placeholder="Enter your email" />
                <Button text={<BsArrowRight className="icon" />} className="arrowSub" />
              </form>
            </div>
          </div>
          <div className="copyrite">
            <p>&copy; Copyright 2022. All rights reserved.</p>
            <p>Made from all the goodness in the dough.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;