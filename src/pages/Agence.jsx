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
    ScrollTrigger.create({
      trigger: imageDivRef.current,
      start: "top 10%",
      end: "top -180%",
      pin: true,
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
  }, []);

  return (
    <div className="bg-white py-1">
      <div className="section1">
        <div ref={imageDivRef} className="h-67 w-52 absolute top-46 left-102 ">
          <div className="h-full w-full rounded-[1.2rem] overflow-hidden">
            <img className="h-full w-full object-cover" src={img} />
          </div>
        </div>
        <div className="relative font-[font2] h-full w-full">
          <div className="mt-[23.8rem]">
            <h1 className="text-[17rem] text-center uppercase leading-59 ">
              Soixan7e <br /> Douze
            </h1>
          </div>
          <div className="pl-[40%] w-full">
            <p className="text-[3.5rem] leading-14 p-1">
              <span className="px-36"></span>
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
        <div className="font-[font2] h-1/2 w-full px-[11%] text-xl mt-[14%]">
          <div className="flex mb-[15%]">
            <h2 className="w-[37%]">Expertise</h2>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
          </div>
          <div className="flex gap-2">
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
      <div className="section2 h-[50vh]"></div>
    </div>
  );
};

export default Agence;
