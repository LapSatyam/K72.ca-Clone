import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";
const Home = () => {
  return (
    <>
      <div className="h-full w-full fixed">
        <Video />
      </div>

      <div className="h-screen w-full text-white flex flex-col relative overflow-hidden justify-between p-2">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  );
};

export default Home;
