import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import Images from "./Images";

import hero1 from "../assets/hero2.webp";
import hero2 from "../assets/laptop.jpg";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import hero5 from "../assets/burgers.jpg";
import hero6 from "../assets/chips.jpg";
import hero7 from "../assets/Nikes.jpg";
import hero8 from "../assets/light_shoes.jpg";

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We’re changing the way people shop.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          We are committed to offering high-quality products at affordable
          prices, ensuring a seamless shopping experience for our customers..
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      {/* CAROUSEL */}
      {/* <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-96 object-cover"
              />
            </div>
          );
        })}
      </div> */}
      <div className="relative h-[28rem]">
        <div className="bg-black h-20 w-72 absolute left-8 top-11 z-30 opacity-20 rounded-md"></div>
        <div className="absolute z-40 left-10 top-10 text-white h-32">
          <p className="text-2xl font-medium tracking-wide py-1">
            Latest trending
          </p>
          <p className="text-3xl font-extrabold tracking-widest pb-1">
            Exclusive items
          </p>
          <Link to="products">
            <button className="mt-4 btn btn-md">Learn More...</button>
          </Link>
        </div>
        <ImageSlider images={carouselImages} />
      </div>
    </div>
  );
};

export default Hero;
