import { Parallax } from "react-parallax";

const Banner = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={500}
    >
      <div className="hero h-screen ">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 px-96 py-40">
          <div className="max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
