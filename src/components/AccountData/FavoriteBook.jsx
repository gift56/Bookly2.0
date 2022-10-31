import React from "react";
import governBook from "../../assets/governB.png";
import historyBook from "../../assets/historyB.png";

const FavoriteBook = () => {
  const bookImages = [governBook, historyBook, governBook, historyBook];

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBook;
