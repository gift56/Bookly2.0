import React from "react";
import Button from "./Button";
import Hero from "../assets/heroImg.png";

const Welcome = () => {
  return (
    <section>
      <div className="contain">
        <div className="heroCon">
          <div className="textSide">
            <span className="online">AN ONLINE BOOKSTORE</span>
            <h2>
              Welcome to <span>Bookly</span>
            </h2>
            <p>
              <span>Nemo enim ipsam voluptatem quia voluptas sit a</span>
              <span>spernatur aut odit aut fugit, sed quia consequuntur</span>
              <span>magni dolores eos qui ratione voluptatem</span>
              <span>sequi nesciunt.</span>
            </p>
            <Button className="none" text="Get Started" />
          </div>
          <div className="Image"></div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
