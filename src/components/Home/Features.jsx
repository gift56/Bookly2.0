import React from "react";
import { featuresData } from "../../utils/booksData";
import BookFeature from "./BookFeature";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../Button/Button";

const Features = ({ rowId, title }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slideShow" + rowId);
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    let slider = document.getElementById("slideShow" + rowId);
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
    <section className="featuresBg">
      <div className="contain">
        <div className="Feature">
          <MdChevronLeft onClick={slideLeft} size={40} className="leftArrow" />
          <div className="featureContent scroll-hide">
            {featuresData.map((item, index) => (
              <BookFeature
                key={index}
                item={item}
                rowId={rowId}
                title={title}
              />
            ))}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="rightArrow"
          />
        </div>
        {rowId == 2 && (
          <div className="buttonShow">
            <Button text="Show more" className="show" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;