import React from "react";
import governBook from "../../assets/governB.png";
import historyBook from "../../assets/historyB.png";

const FavoriteBook = () => {
  const bookImages = [governBook, historyBook, governBook, historyBook];

  const Ratings = [
    {
      rate: "80+",
      detail: "Book Bestsellers",
    },
    {
      rate: "60+",
      detail: "New Arrivals",
    },
    {
      rate: "75+",
      detail: "Books for coming",
    },
  ];

  return (
    <section className="favoriteCon">
      <div className="contain">
        <div className="favoriteArea">
          <div className="favoriteLeftside">
            {bookImages.map((image, index) => (
              <div className="image" key={index}>
                <img src={image} alt="book_image" />
              </div>
            ))}
          </div>
          <div className="favoriteRightside">
            <div className="titleArea">
              <h2>
                Find your favorite books <span>here</span>
              </h2>
              <p>
                Bookly regularly updates its library with the most interesting
                and fascinating books for kids and adults alike.
              </p>
            </div>
            <div className="ratings">
              {Ratings.map(({ rate, detail }, i) => (
                <div className="rate" key={i}>
                    <p></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBook;
