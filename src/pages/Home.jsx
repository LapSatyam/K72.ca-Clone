import HomeBottomText from "../components/home/HomeBottomText";
import HomeCenterText from "../components/home/HomeCenterText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";
const Home = () => {
  return (
    <>
      <div className="h-full w-full fixed">
        <Video />
      </div>

      <div className="h-screen w-full text-white flex flex-col relative overflow-hidden md:justify-between justify-end p-2">
        <HomeHeroText />
        <HomeCenterText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
