import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const FullScreenNav = ({ navRef, closeMenu }) => {
  function mouseEnter(id) {
    gsap.to(id, {
      display: "flex",
      height: "100%",
      duration: 0.25,
      opacity: 1,
    });
  }
  function mouseLeave(id) {
    gsap.to(id, {
      height: "0%",
      duration: 0.25,
      opacity: 0,
      display: "none",
    });
  }
  useGSAP(() => {
    gsap.set(navRef.current, {
      yPercent: -100,
    });
  }, []);

  return (
    <div
      ref={navRef}
      className="h-screen w-full bg-black fixed flex z-25 flex-col font-[font2] text-white"
    >
      <button
        onClick={closeMenu}
        className="absolute right-2.5 top-2.5 hover:text-[#c6ff1a] cursor-pointer"
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M0 0L100 100" />
          <path d="M100 0L0 100" />
        </svg>
      </button>

      <div className="h-full w-full flex flex-col justify-center text-[7rem] leading-none uppercase text-center">
        {/* First */}
        <Link onClick={closeMenu} to="/projects">
          <div
            className="border-b relative border-white/50 border-t min-w-full h-25.5 pt-0.5 overflow-hidden"
            onMouseEnter={() => mouseEnter("#one")}
            onMouseLeave={() => mouseLeave("#one")}
          >
            <h2>Projets</h2>
            <div
              id="one"
              className="absolute top-0 animate-marquee hidden text-black whitespace-nowrap w-max items-center text-8xl bg-[#c6ff1a] z-10"
            >
              <div className="flex h-full items-baseline py-1.5 shrink-0">
                <img
                  className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                  src="/assets/nav/1.jpg"
                  alt=""
                />
                <span className="mx-6">POUR TOUT VOIR </span>
                <img
                  className="w-52 h-full py-1.5 rounded-full object-cover"
                  src="/assets/nav/2.png"
                />
                <span className="mx-6">POUR TOUT VOIR </span>
              </div>

              {/* Duplicate */}
              <>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/1.jpg"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/2.png"
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                </div>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/1.jpg"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/2.png"
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                </div>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/1.jpg"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/2.png"
                  />
                  <span className="mx-6">POUR TOUT VOIR </span>
                </div>
              </>
            </div>
          </div>
        </Link>

        {/* Second */}
        <Link onClick={closeMenu} to="/agence">
          <div
            className="border-b relative border-white/50 min-w-full h-25.5 pt-0.5 overflow-hidden"
            onMouseEnter={() => mouseEnter("#two")}
            onMouseLeave={() => mouseLeave("#two")}
          >
            <h2>Agence</h2>
            <div
              id="two"
              className="absolute top-0 animate-marquee hidden text-black whitespace-nowrap w-max items-center text-8xl bg-[#c6ff1a] z-10"
            >
              <div className="flex h-full items-baseline py-1.5 shrink-0">
                <img
                  className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                  src="/assets/nav/one.png"
                  alt=""
                />
                <span className="mx-6">POUR TOUT SAVOIR</span>
                <img
                  className="w-52 h-full py-1.5 rounded-full object-cover"
                  src="/assets/nav/two.png"
                />
                <span className="mx-6">POUR TOUT SAVOIR </span>
              </div>

              {/* Duplicate */}
              <>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/one.png"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT SAVOIR</span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/two.png"
                  />
                  <span className="mx-6">POUR TOUT SAVOIR </span>
                </div>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/one.png"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT SAVOIR</span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/two.png"
                  />
                  <span className="mx-6">POUR TOUT SAVOIR </span>
                </div>
                <div className="flex h-full items-baseline py-1.5 shrink-0">
                  <img
                    className="w-52 -mb-3 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/one.png"
                    alt=""
                  />
                  <span className="mx-6">POUR TOUT SAVOIR</span>
                  <img
                    className="w-52 h-full py-1.5 rounded-full object-cover"
                    src="/assets/nav/two.png"
                  />
                  <span className="mx-6">POUR TOUT SAVOIR </span>
                </div>
              </>
            </div>
          </div>
        </Link>

        {/* Third */}
        <Link onClick={closeMenu} to="/contact">
          <div
            className="border-b relative border-white/50 w-full h-25.5 pt-0.5 overflow-hidden"
            onMouseEnter={() => mouseEnter("#three")}
            onMouseLeave={() => mouseLeave("#three")}
          >
            <h2>Contact</h2>
            <div
              id="three"
              className="absolute top-0 hidden text-black animate-marquee whitespace-nowrap w-max items-center text-8xl bg-[#c6ff1a] z-10"
            >
              <div className="flex h-full items-baseline pt-4 shrink-0">
                <svg
                  width={60}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="20 10 60 81"
                  fill="currentColor"
                >
                  <path
                    d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                  />
                </svg>
                <span className="mx-6">POUR ENVOYER UN FAX</span>
                <svg
                  width={60}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="20 10 60 81"
                  fill="currentColor"
                >
                  <path
                    d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                  />
                </svg>
                <span className="mx-6">POUR ENVOYER UN FAX</span>
              </div>

              {/* Duplicate */}
              <>
                <div className="flex h-full items-baseline pt-4 shrink-0">
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                </div>
                <div className="flex h-full items-baseline pt-4 shrink-0">
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                </div>
                <div className="flex h-full items-baseline pt-4 shrink-0">
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                  <svg
                    width={60}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="20 10 60 81"
                    fill="currentColor"
                  >
                    <path
                      d="
    M22 10
    Q20 10 20 13
    L20 55
    Q20 58 22 60
    L47 88
    Q50 91 53 88
    L78 60
    Q80 58 80 55
    L80 13
    Q80 10 78 10
    L64 24
    L50 38
    L36 24
    Z
  "
                    />
                  </svg>
                  <span className="mx-6">POUR ENVOYER UN FAX</span>
                </div>
              </>
            </div>
          </div>
        </Link>

        {/* Fourth */}
        <Link onClick={closeMenu} to="/blogue">
          <div
            className="border-b relative border-white/50 w-full h-25.5 pt-0.5 overflow-hidden"
            onMouseEnter={() => mouseEnter("#four")}
            onMouseLeave={() => mouseLeave("#four")}
          >
            <h2>Blogue</h2>
            <div
              id="four"
              className="absolute top-0 hidden text-black animate-marquee whitespace-nowrap w-max items-center text-8xl bg-[#c6ff1a] z-10"
            >
              <div className="flex h-full items-baseline pb-1.5 shrink-0">
                <img
                  className="h-full w-52 rounded-full object-cover py-1.5"
                  src="/assets/nav/3.jpg"
                />
                <span className="mx-6">LIRE LES ARTICLES</span>
                <img
                  className="h-full w-52 rounded-full object-cover py-1.5"
                  src="/assets/nav/4.gif"
                />
                <span className="mx-6">LIRE LES ARTICLES</span>
              </div>

              {/* Duplicate */}
              <>
                <div className="flex h-full items-baseline pb-1.5 shrink-0">
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/3.jpg"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/4.gif"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                </div>
                <div className="flex h-full items-baseline pb-1.5 shrink-0">
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/3.jpg"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/4.gif"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                </div>
                <div className="flex h-full items-baseline pb-1.5 shrink-0">
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/3.jpg"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                  <img
                    className="h-full w-52 rounded-full object-cover py-1.5"
                    src="/assets/nav/4.gif"
                  />
                  <span className="mx-6">LIRE LES ARTICLES</span>
                </div>
              </>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FullScreenNav;
