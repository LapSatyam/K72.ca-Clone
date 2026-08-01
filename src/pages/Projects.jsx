import gsap from "gsap";
import ProjectsCard from "../components/projects/ProjectsCard";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const images = [
  {
    img1: "/assets/projects/1.jpg",
    img2: "/assets/projects/2.jpg",
  },
  {
    img1: "/assets/projects/3.jpg",
    img2: "/assets/projects/4.jpg",
  },
  {
    img1: "/assets/projects/5.jpg",
    img2: "/assets/projects/6.jpg",
  },
  {
    img1: "/assets/projects/7.jpg",
    img2: "/assets/projects/8.jpg",
  },
  {
    img1: "/assets/projects/9.jpg",
    img2: "/assets/projects/10.jpg",
  },
  {
    img1: "/assets/projects/11.jpg",
    img2: "/assets/projects/12.jpg",
  },
  {
    img1: "/assets/projects/13.jpg",
    img2: "/assets/projects/14.jpg",
  },
  {
    img1: "/assets/projects/15.jpg",
    img2: "/assets/projects/16.jpg",
  },
  {
    img1: "/assets/projects/17.jpg",
    img2: "/assets/nav/3.jpg",
  },
];

const Projects = () => {
  const cardsContainarRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".card").forEach((card) => {
        gsap.from(card, {
          height: 50,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "top -40%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: cardsContainarRef },
  );
  return (
    <div className="font-[font2] min-h-screen w-full bg-white">
      <h1 className="relative inline-block pl-1.5 mt-[20%] text-[12.5rem]">
        PROJETS
        <sup className="absolute top-20 -right-8 text-[2.5rem]">18</sup>
      </h1>
      <div
        ref={cardsContainarRef}
        className="flex flex-col gap-2.5 -mt-21 px-2.5 h-fit w-full text-white text-5xl"
      >
        {images.map((img, idx) => {
          return <ProjectsCard key={idx} img1={img.img1} img2={img.img2} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
