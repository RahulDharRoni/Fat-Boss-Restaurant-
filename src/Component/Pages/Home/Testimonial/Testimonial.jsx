import Headline from "../../../Common/Headline/Headline";
import quote from "../../../../assets/quote-left 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// import "./testimonial.css";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="lg:mx-64 md:mx-44">
      <Headline
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></Headline>
      <div className="flex justify-center">
        <div>
          <div className="rating rating-lg">
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img src={quote} alt="" />
      </div>
      <div className=" mx-auto my-3">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className="text-center px-20 py-10">
            <p className="italic text-lg">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h1 className="font-bold text-red-800 mt-5 text-2xl">JANE DOE</h1>
          </SwiperSlide>
          <SwiperSlide className="text-center px-20 py-10">
            <p className="italic text-lg">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h1 className="font-bold text-red-800 mt-5 text-2xl">JANE DOE</h1>
          </SwiperSlide>
          <SwiperSlide className="text-center px-20 py-10">
            <p className="italic text-lg">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h1 className="font-bold text-red-800 mt-5 text-2xl">JANE DOE</h1>
          </SwiperSlide>
          <SwiperSlide className="text-center px-20 py-10">
            <p className="italic text-lg">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h1 className="font-bold text-red-800 mt-5 text-2xl">JANE DOE</h1>
          </SwiperSlide>
          <SwiperSlide className="text-center px-20 py-10">
            <p className="italic text-lg">
              Various version have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like). It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <h1 className="font-bold text-red-800 mt-5 text-2xl">JANE DOE</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
