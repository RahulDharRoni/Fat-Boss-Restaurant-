// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <section className="relative ">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>

          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>

          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover">
            <img
              src="https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/06/08/00/03/pizza-1442946_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>

          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover w-full h-full flex justify-center items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg"
              alt=""
              className="object-cover max-w-full max-h-full"
            />
          </div>

          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
