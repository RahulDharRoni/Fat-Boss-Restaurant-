import React from "react";
import FoodCart from "../foodCart/FoodCart";

const ShopItems = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {item.map((items) => (
        <FoodCart items={items} key={items._id} />
      ))}
    </div>
  );
};

export default ShopItems;
