import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {
  const { pathname } = useLocation();

  const stagger =
    pathname === "/"
      ? -0.28
      : pathname === "/projects"
        ? 0.28
        : pathname === "/agence"
          ? -0.28
          : -0.28;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(
    () => {
      const stairs = gsap.utils.toArray(".stair");

      const tl = gsap.timeline();

      tl.set(stairParentRef.current, {
        display: "block",
      })
        .set(stairs, {
          yPercent: 0,
        })
        .to(stairs, {
          yPercent: 100,
          delay: 0.4,
          stagger: {
            amount: stagger,
          },
        })
        .set(stairParentRef.current, {
          display: "none",
        })
        .set(stairs, {
          yPercent: 0,
        });

      return () => tl.kill();
    },
    {
      scope: stairParentRef,
      dependencies: [pathname],
    },
  );

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-30 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stairs;
