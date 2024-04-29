import Banner from "../../Common/Banner/Banner";
import shopImg from "../../../assets/street.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopItems from "./shopItems/ShopItems";
import useMenu from "../../Common/Hooks/useMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shop = () => {
  const categories = ["all", "pizza", "dessert", "salad", "soup", "drinks"];
  const { catagory } = useParams();
  const itemsIndex = categories.indexOf(catagory);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(itemsIndex);
  const drinks = menu.filter((data) => data.category === "drinks");
  const salad = menu.filter((data) => data.category === "salad");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const soup = menu.filter((data) => data.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | shop</title>
      </Helmet>
      <Banner img={shopImg} title={"Shop"}></Banner>
      <Tabs
        className="w-[1200px] mx-auto"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="my-4 border-b-2 text-center font-bold">
          <Tab>All</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <ShopItems item={menu} />
        </TabPanel>
        <TabPanel>
          <ShopItems item={pizza} />
        </TabPanel>
        <TabPanel>
          <ShopItems item={dessert} />
        </TabPanel>
        <TabPanel>
          <ShopItems item={salad} />
        </TabPanel>
        <TabPanel>
          <ShopItems item={soup} />
        </TabPanel>
        <TabPanel>
          <ShopItems item={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
