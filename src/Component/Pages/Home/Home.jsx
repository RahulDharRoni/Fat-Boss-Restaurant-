// import Hero from "./Hero/Hero";
import Banner from "../../Common/Banner/Banner";
import Cards from "./Cards/Cards";
import HeroBanner from "./HeroBanner/HeroBanner";
import ItemsSlider from "./ItemsSlider/ItemsSlider";
import PopularMenu from "./PopularMenu/popularMenu";
import three from "../../../assets/3c.jpg";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ItemsSlider></ItemsSlider>
      <Banner
        title={"Bistro Boss"}
        img={
          "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg"
        }
      ></Banner>
      <PopularMenu></PopularMenu>
      <Cards></Cards>
      <Banner title={"Bistro Boss"} img={three}></Banner>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
