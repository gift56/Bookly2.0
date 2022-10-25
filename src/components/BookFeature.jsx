import React from "react";
import Button from "./Button/Button";

const BookFeature = ({ item, rowId, title }) => {
  return (
    <div className="bookDetails scroll-hide">
      <h2>{title}</h2>
      <div className="bookCard" id={"slideShow" + rowId}>
        {item.books.map((book, index) => (
          <div key={index} className="bookContent">
            <img src={book.img} alt="img" />
            <div className="priceDetails">
              <p className="bookName">{book.bookText}</p>
              <p className="bookPrice">&#x20A6; {book.price}</p>
            </div>
            <Button text="ADD TO CART" className="Add" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFeature;
