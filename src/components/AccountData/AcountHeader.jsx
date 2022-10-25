import React, { useState } from "react";

const AcountHeader = () => {
  const [show, setShow] = useState(false);
  
  const AccountLinks = [
    {
      img: "",
      name: "My Account",
    },
    {
      img: "",
      name: "Orders",
    },
    {
      img: "",
      name: "Saved items",
    },
  ];
  return <div>AcountHeader</div>;
};

export default AcountHeader;
