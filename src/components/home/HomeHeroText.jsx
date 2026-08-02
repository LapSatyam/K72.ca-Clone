import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-5xl lg:text-9xl uppercase text-center  lg:leading-30 pt-1.5">
      <div className="flex justify-center items-center">L'étincelle</div>
      <div className="flex justify-center items-center">
        qui
        <div className="h-9 w-22 lg:w-52 lg:h-22 -mt-1.5 lg:-mt-3 rounded-full overflow-hidden">
          <video
            className="h-full w-full object-cover rounded-full pointer-events-none"
            muted
            loop
            autoPlay
            playsInline
            src="./video.mp4"
          ></video>
        </div>
        génère
      </div>
      <div className="flex justify-center items-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
