import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div
      id="Home"
      className="font-[font2] flex items-center justify-center gap-5 tracking-tighter text-3xl lg:text-[5.5rem] uppercase leading-8 lg:leading-13 transition"
    >
      <Link
        to="/projects"
        className="lg:border-4 border-2 hover:border-[#c6ff1a] hover:text-[#c6ff1a] border-white rounded-full lg:px-6.5 lg:pt-5 lg:pb-0.5 px-2.5"
      >
        Projets
      </Link>
      <Link
        to="/agence"
        className="lg:border-4 border-2 hover:border-[#c6ff1a] hover:text-[#c6ff1a] border-white rounded-full lg:px-6.5 lg:pt-5 lg:pb-0.5 px-2.5"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
