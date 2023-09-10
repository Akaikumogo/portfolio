import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./Styles/App.css";
export default function App() {
  return (
    <div className="Screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Service" element={<Service />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path = "/BuyMeCoffee" element={<BuyMeCoffee/>} */}
      </Routes>
    </div>
  );
}
