import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BuyMeCoffee from "./components/BuyMeCoffee";
import Portfolio from "./components/Portfolio";
import "./Styles/App.css";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="Screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/BuyMeCoffee" element={<BuyMeCoffee />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
