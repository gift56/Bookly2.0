import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
