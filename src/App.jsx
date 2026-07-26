import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Logo from "./components/home/Logo";

const App = () => {
  return (
    <>
      <div className="fixed top-3.5 left-4.5 scale-112 z-100">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
