import { useRef } from "react";
import Logo from "./Logo";
import gsap from "gsap";
import FullScreenNav from "./FullScreenNav";

const Navbar = () => {
  const navRef = useRef(null);
  return (
    <div className="fixed top-0 left-0 flex justify-between w-full h-18 z-20">
      <div></div>

      <div
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
      <FullScreenNav />
    </div>
  );
};

export default Navbar;
