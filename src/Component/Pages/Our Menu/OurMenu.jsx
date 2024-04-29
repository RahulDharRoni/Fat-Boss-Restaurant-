import Banner from "../../Common/Banner/Banner";
import newPic from "../../../assets/new.jpg";
import Headline from "../../Common/Headline/Headline";
import useMenu from "../../Common/Hooks/useMenu";
import MenuCatagory from "./MenuCatagory/MenuCatagory";
import desertsImg from "../../../assets/dessert.jpg";
import drinksImg from "../../../assets/drinks.jpg";
import saladImg from "../../../assets/salad.jpg";
import pizzaImg from "../../../assets/pizza.jpg";
import soupImg from "../../../assets/soup.jpg";

const OurMenu = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((data) => data.category === "drinks");
  const salad = menu.filter((data) => data.category === "salad");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const soup = menu.filter((data) => data.category === "soup");
  const offered = menu.filter((data) => data.category === "offered");
  return (
    <div className="">
      <Banner img={newPic} title={"OUR MENU"}></Banner>
      <Headline
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></Headline>
      <MenuCatagory item={offered}></MenuCatagory>
      <MenuCatagory
        item={drinks}
        title={"drinks"}
        img={drinksImg}
      ></MenuCatagory>
      <MenuCatagory
        item={dessert}
        title={"dessert"}
        img={desertsImg}
      ></MenuCatagory>
      <MenuCatagory item={pizza} title={"pizza"} img={pizzaImg}></MenuCatagory>
      <MenuCatagory item={soup} title={"soup"} img={soupImg}></MenuCatagory>
      <MenuCatagory item={salad} title={"salad"} img={saladImg}></MenuCatagory>
    </div>
  );
};

export default OurMenu;
