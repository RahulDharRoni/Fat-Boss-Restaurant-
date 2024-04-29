import { Link } from "react-router-dom";
import MenuItem from "../../../Common/MenuItem/MenuItem";
import Banner from "../../../Common/Banner/Banner";

const MenuCatagory = ({ item, title, img }) => {
  return (
    <div className="pt-8 xl:mx-52">
      {title && <Banner img={img} title={title}></Banner>}
      <div className="grid md:grid-cols-2 gap-5 my-10">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/shop/${title}`}>
        <div className="flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 my-4 ">
            Order Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCatagory;
