import React from "react";
import { featuresData } from "../utils/booksData";
import BookFeature from "./BookFeature";

const Features = () => {
  return (
    <section>
      <div className="featuresBg">
        <div className="contain">
          <div className="featureContent">
            {featuresData.map((item, index) => (
              <BookFeature key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
