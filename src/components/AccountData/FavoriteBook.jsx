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
            {bookImages.map((image,index)=>(
                <div className="image">
                    <img src={image} alt="book_image" />
                </div>
            ))}
          </div>
          <div className="favoriteRightside"></div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBook;
