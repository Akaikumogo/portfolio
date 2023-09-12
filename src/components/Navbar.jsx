import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="NavBar" data-aos="fade-up">
      <div className="NavBarContainer">
        <div className="NavBarTitle">AKAIKUMOGO</div>
        <div className="NavBarList">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Portfolio">Portfolio</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink className="BuyMeCoffee" to="/BuyMeCoffee">
            Buy Me Coffee
          </NavLink>
          <div className="creator">
            <br />
            Created by Akaikumogo
          </div>
        </div>
      </div>
    </div>
  );
}
