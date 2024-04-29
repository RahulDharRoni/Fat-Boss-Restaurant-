import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 space-x-2 xl:mx-10">
      <div className="row-span-3 inner-box">
        <div className="rounded-3xl overflow-hidden dish-image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-between content-price">
        <div className="ttl clearfix">
          <h1 className="font-bold">{name}</h1>
        </div>
        <div className="divider w-28 divide-double divide-gray-500"></div>
        <div className="price">
          <span>$25.50</span>
        </div>
      </div>
      <div className="row-span-2 col-span-2">
        <h5>{recipe}</h5>
      </div>
    </div>
  );
};

export default MenuItem;
