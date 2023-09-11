import { Link } from "react-router-dom";
import coffee from "../images/coffee.gif";
export default function BuyMeCoffee() {
  return (
    <div className="buyMeCoffeePage">
      <div className="buyMeCoffeContainer">
        <img className="cofegif" src={coffee} alt="" />

        <Link
          className="clickMe"
          to="https://www.buymeacoffee.com/SarverbekXazratov"
        >
          Click Me
        </Link>
      </div>
    </div>
  );
}
