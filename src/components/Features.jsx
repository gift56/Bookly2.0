import React from "react";
import { featuresData } from "../utils/booksData";
import BookFeature from "./BookFeature";

const Features = () => {
  return (
    <section className="featuresBg">
      <div className="contain">
        <div className="featureContent scroll-hide">
          {featuresData.map((item, index) => (
            <BookFeature key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
