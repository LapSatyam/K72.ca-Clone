import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import Logo from "./components/common/Logo.jsx";
import Navbar from "./components/common/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Logo />
    <Stairs>
      <App />
    </Stairs>
  </BrowserRouter>,
);
