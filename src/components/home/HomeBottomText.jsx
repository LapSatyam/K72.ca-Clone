import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div
      id="Home"
      className="font-[font2] flex items-center justify-center gap-4.5 tracking-tighter text-[5.5rem] uppercase leading-13 transition"
    >
      <Link
        to="/projects"
        className="border-4 hover:border-[#c6ff1a] hover:text-[#c6ff1a] border-white rounded-full px-6.5 pt-5 pb-0.5"
      >
        Projets
      </Link>
      <Link
        to="/agence"
        className="border-4 hover:border-[#c6ff1a] hover:text-[#c6ff1a] border-white rounded-full px-6.5 pt-5 pb-0.5"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
