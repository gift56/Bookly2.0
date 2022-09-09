import React from "react";

const BookFeature = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <div>
        {item.books.map((book, index) => (
          <div key={index}>
            <img src={book.img} alt="img" />
            <p>{book.bookText}</p>
            <p>&#x20A6; {book.price}</p>
            <button className="btn">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFeature;
