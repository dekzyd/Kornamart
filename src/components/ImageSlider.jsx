import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./App.css";

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    arrows: false,
    // dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="lg:h-[374px] object-contain ">
              {/* <img src={item.src} alt={item.alt} className="rounded" /> */}
              <img src={item} alt="image" className="rounded" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
