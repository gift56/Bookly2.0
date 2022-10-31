import React from "react";
import governBook from "../../assets/governB.png";
import historyBook from "../../assets/historyB.png";


const FavoriteBook = () => {
  const books = [];
  return (
    <section className="favoriteCon">
      <div className="contain">
        <div className="favoriteArea">
          <div className="favoriteLeftside"></div>
          <div className="favoriteRightside"></div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBook;
