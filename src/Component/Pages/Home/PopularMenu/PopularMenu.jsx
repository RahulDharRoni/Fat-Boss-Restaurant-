import Headline from "../../../Common/Headline/Headline";
import useMenu from "../../../Common/Hooks/useMenu";
import MenuItem from "../../../Common/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, loading, refetch] = useMenu([]);
  const popularItems = menu.filter((data) => data.category == "popular");
  console.log(popularItems);
  return (
    <div>
      <section className="mb-12 mx-5">
        <Headline
          heading={"FROM OUR MENU"}
          subHeading={"---Check it out---"}
        ></Headline>
        <div className="grid md:grid-cols-2 gap-10 xl:mx-52">
          {popularItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 ">
            View Full Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
