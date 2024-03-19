import AboutUs from "../AboutUs/AboutUs";
import Airlines from "../Airlines/Airlines";
import Banner from "../Banner/Banner";
import Deals from "../Deals/Deals";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <Deals></Deals>
      <Airlines></Airlines>
      {/* <AboutUs></AboutUs> */}
    </div>
  );
};

export default Home;
