import coffee from "../images/coffee.gif";
export default function BuyMeCoffee() {
  return (
    <div className="buyMeCoffeePage">
      <div className="buyMeCoffeContainer">
        <img className="cofegif" src={coffee} alt="" />
        <a
          className="clickMe"
          href="https://www.buymeacoffee.com/SarverbekXazratov"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}
