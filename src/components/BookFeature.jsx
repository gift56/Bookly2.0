import React from "react";
import Button from "./Button";

const BookFeature = ({ item }) => {
  return (
    <div className="bookDetails scroll-hide">
      <h2>{item.title}</h2>
      <div className="bookCard" id={`slideShow`}>
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
