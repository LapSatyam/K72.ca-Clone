import { useRef, useState } from "react";
import Logo from "./Logo";
import gsap from "gsap";
import FullScreenNav from "./FullScreenNav";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const fullNavRef = useRef(null);
  const fill =
    pathname === "/"
      ? "#fff"
      : pathname === "/agence"
        ? "#000"
        : pathname === "/projects"
          ? "#000"
          : "#fff";

  const openMenu = () => {
    document.body.style.overflow = "hidden";

    gsap.to(fullNavRef.current, {
      yPercent: 0,
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.to("#logo", {
      fill: "#fff",
      duration: 0.1,
    });
  };

  const closeMenu = () => {
    gsap.to(fullNavRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        document.body.style.overflow = "auto";
        gsap.to("#logo", { clearProps: "all", duration: 0.2 });
      },
    });
    gsap.to("#logo", {
      fill: fill,
      duration: 0.2,
    });
  };

  return (
    <div className="fixed top-0 left-0 flex justify-between w-full h-18 z-20">
      <div></div>

      <div
        onClick={openMenu}
        onMouseEnter={() => {
          gsap.to(navRef.current, {
            height: "100%",
            ease: "expo.inOut",
            duration: 0.15,
          });
        }}
        onMouseLeave={() => {
          gsap.to(navRef.current, {
            height: 0,
            ease: "expo.inOut",
            duration: 0.15,
          });
        }}
        className="h-12.5 w-53 bg-black relative group cursor-pointer"
      >
        <div ref={navRef} className="absolute w-full bg-[#c6ff1a] z-5"></div>
        <div className="absolute top-[45%] left-[55%] pl-4 flex flex-col items-center justify-end gap-1 z-10 transition-all duration-200 delay-900">
          <div className="w-12 border-t-[1.9999px] border-t-white group-hover:border-black"></div>
          <div className="w-6 border-t-[1.9999px] ml-auto border-t-white group-hover:border-black"></div>
        </div>
      </div>
      <FullScreenNav navRef={fullNavRef} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
