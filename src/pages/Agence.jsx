import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const imageArray = [
  "/assets/img1.jpg",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jpg",
  "/assets/img5.jpg",
  "/assets/img6.jpg",
  "/assets/img7.jpg",
  "/assets/img8.jpg",
];

const Agence = () => {
  const imageDivRef = useRef(null);
  const [img, setImg] = useState(imageArray[0]);
  const indexRef = useRef(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
      ScrollTrigger.create({
        trigger: imageDivRef.current,
        start: "top 10%",
        end: "top -180%",
        pin: true,
        markers: true,
        scrub: 2,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: ({ progress }) => {
          const index = Math.min(7, Math.floor(progress * 8));

          if (indexRef.current !== imageArray[index]) {
            indexRef.current = index;
            setImg(imageArray[index]);
          }
        },
      });
    });

    mm.add("(max-width:1020px)", () => {
      ScrollTrigger.create({
        trigger: imageDivRef.current,
        start: "top 10%",
        end: "top -139%",
        pin: true,
        markers: true,
        scrub: 2,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: ({ progress }) => {
          const index = Math.min(7, Math.floor(progress * 8));

          if (indexRef.current !== index) {
            indexRef.current = index;
            setImg(imageArray[index]);
          }
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-white py-1 overflow-x-hidden">
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-29 lg:h-67 absolute top-31 lg:top-45 left-27.5 lg:left-102 z-0"
        >
          <div className="h-full w-full rounded-2xl overflow-hidden">
            <img className="h-full w-full object-cover" src={img} />
          </div>
        </div>
        <div className="relative font-[font2] h-full w-full">
          <div className="mt-52 lg:mt-[23.8rem]">
            <h1 className="text-[4.8rem] lg:text-[17rem] text-center uppercase leading-16 lg:leading-59 ">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] my-28 lg:my-0 w-full">
            <p className="font-black  text-[1.25rem] lg:text-[3.5rem] leading-5 lg:leading-14 px-3 lg:p-1">
              <span className="px-18 lg:px-36"></span>
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="font-[font2] h-fit w-full px-2 lg:px-[11%] text-lg leading-5.5 mt-[14%]">
          <div className="flex mb-[15%]">
            <h2 className="w-[37%]">Expertise</h2>
            <ul className="mx-auto lg:mx-0">
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row gap-6.5 lg:gap-2">
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
