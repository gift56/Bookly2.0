import React from "react";

const Card = ({ details, name }) => {
  return (
    <div className="cardBody">
      <p>
        {details.map((line) => (
          <>
            <span>{line.firstLine}</span>
            <span>{line.secondLine}</span>
            <span>{line.thirdLine}</span>
            <span>{line.forthLine}</span>
            <span>{line.fifthLine}</span>
            <span>{line.lastLine}</span>
          </>
        ))}
      </p>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;