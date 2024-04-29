import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/07/23/20/44/pastry-shop-8145805_1280.jpg"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/07/07/17/47/  -8113165_1280.jpg"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/04/01/20/25/paella-7893063_1280.jpg"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg"
            alt=""
            className="object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_1280.jpg"
            alt=""
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
