const FullScreenNav = () => {
  return (
    <div className="h-screen w-full bg-black fixed z-90 overflow-hidden flex flex-col font-[font2] text-white">
      <div className="absolute right-2.5 top-2.5 hover:text-[#c6ff1a] cursor-pointer">
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
      </div>

      <div className="h-full w-full flex flex-col justify-center text-[7rem] leading-none uppercase text-center">
        <div className="border-b relative border-white/50 border-t w-full h-25.5 pt-0.5">
          <h2 className="">Projets</h2>
          <div className="h-full w-full absolute top-0">
            <img
              className="w-40 h-full py-2 rounded-3xl object-cover"
              src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
              alt=""
            />
            <span>POUR TOUT VOIR </span>
            <img
              className="w-40 h-full py-2 rounded-3xl object-cover"
              src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93"
            />
            <span>POUR TOUT VOIR </span>
          </div>
        </div>
        <div className="border-b border-white/50 w-full h-25.5 pt-0.5">
          Agence
        </div>
        <div className="border-b border-white/50 w-full h-25.5 pt-0.5">
          Contact
        </div>
        <div className="border-b border-white/50 w-full h-25.5 pt-0.5">
          Blogue
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
