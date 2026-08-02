const ProjectsCard = ({ img1, img2 }) => {
  return (
    <div className="card flex flex-col lg:flex-row gap-2.5 overflow-hidden cursor-pointer">
      <div className="h-105 w-full lg:w-[50vw] relative rounded-none transition-all hover:rounded-[45px] group">
        <img
          className="w-full h-full object-cover transition-all group-hover:rounded-[45px]"
          src={img1}
        />
        <div className="w-full h-full bg-black/20 absolute top-0 left-0 flex justify-center items-center opacity-0 transition-opacity group-hover:opacity-100 group-hover:rounded-[45px] ">
          <h2 className="pt-2.5 px-3.5 border-3 rounded-full border-white">
            VOIR LE PROJET
          </h2>
        </div>
      </div>
      <div className="h-105 w-full lg:w-[50vw] relative rounded-none transition-all hover:rounded-[45px] group">
        <img
          className="w-full h-full object-cover transition-all group-hover:rounded-[45px]"
          src={img2}
        />
        <div className="w-full h-full bg-black/20 absolute top-0 left-0 flex justify-center items-center opacity-0 transition-opacity group-hover:opacity-100 group-hover:rounded-[45px] ">
          <h2 className="pt-2.5 px-3.5 border-3 rounded-full border-white">
            VOIR LE PROJET
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
