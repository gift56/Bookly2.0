import React from "react";
import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header btnText="login" linkText="login" />
      <div className="pageNotfound">
        <BiError size={90} color="red" />
        <h1>Page Not Found</h1>
        <span>
          Go back <Link to="/">home</Link>
        </span>
      </div>
    </div>
  );
};

export default NotFound;