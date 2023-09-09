import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
