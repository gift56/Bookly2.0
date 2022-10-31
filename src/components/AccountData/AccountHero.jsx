import { options } from "../../utils/options";
import Button from "../Button/Button";

const AccountHero = () => {
  return (
    <section className="accountHeroArea">
      <div className="contain">
        <div className="accountCon">
          <div className="titleArea">
            <h2>Shop Now</h2>
            <p>Buy and sell your textbooks for the best price</p>
          </div>
          <div className="selections">
            <form className="select">
              {options.map(({ name, subOption }) => (
                <select id={name} key={name}>
                  {subOption.map((option) => (
                    <option value={name}>{option}</option>
                  ))}
                </select>
              ))}
              <Button className="search" text="Search" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountHero;
