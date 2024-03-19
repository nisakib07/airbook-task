import AboutUs from "../AboutUs/AboutUs";
import Airlines from "../Airlines/Airlines";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Deals from "../Deals/Deals";
import Featured from "../Featured/Featured";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Featured></Featured>
      <Deals></Deals>
      <Airlines></Airlines>
      <Blog></Blog>
      {/* <AboutUs></AboutUs> */}
    </div>
  );
};

export default Home;
