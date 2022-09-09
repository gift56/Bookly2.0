import React from "react";
import { featuresData } from "../utils/booksData";
import BookFeature from "./BookFeature";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Features = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slideShow");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slideShow");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section className="featuresBg">
      <div className="contain">
        <MdChevronLeft onClick={slideLeft} size={40} className="leftArrow" />
        <div className="featureContent scroll-hide">
          {featuresData.map((item, index) => (
            <BookFeature key={index} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="rightArrow" />
      </div>
    </section>
  );
};

export default Features;
