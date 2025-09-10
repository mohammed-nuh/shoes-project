import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const products = [
    { id: 1, image: "/src/assets/Banner/banner1.png" },
    { id: 2, image: "/src/assets/Banner/banner2.png" },
    { id: 3, image: "/src/assets/Banner/banner3.png" },
  ];

  const categoryBanners = [
    { id: 1, image: "/src/assets/Top_Categrories/cat1.png", route: "/categories/cat1" },
    { id: 2, image: "/src/assets/Top_Categrories/cat2.png", route: "/categories/cat2" },
    { id: 3, image: "/src/assets/Top_Categrories/cat3.png", route: "/categories/cat3" },
    { id: 4, image: "/src/assets/Top_Categrories/cat4.png", route: "/categories/cat4" },
    { id: 5, image: "/src/assets/Top_Categrories/cat5.png", route: "/categories/cat5" },
    { id: 6, image: "/src/assets/Top_Categrories/cat6.png", route: "/categories/cat6" },
  ];

  // custom arrows
  const PrevArrow = (props) => (
    <button
      className="absolute left-7 top-1/2 -translate-y-1/2 cursor-pointer z-20 bg-white p-2 rounded-full shadow-md"
      onClick={props.onClick}
    >
      <ChevronLeft className="w-5 h-5" />
    </button>
  );

  const NextArrow = (props) => (
    <button
      className="absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer z-20 bg-white p-2 rounded-full shadow-md"
      onClick={props.onClick}
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const categorySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      {/* Main Banner */}
      <div className="w-full overflow-hidden block">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt="banner"
                className="w-full object-contain"  // full image, no crop
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Category Carousel */}
      <div className="w-full overflow-hidden mt-6 relative">
        <Slider {...categorySettings}>
          {categoryBanners.map((banner) => (
            <div key={banner.id} className="px-2">
              <Link to={banner.route}>
                <img
                  src={banner.image}
                  alt={`category-banner-${banner.id}`}
                  className="w-full object-contain rounded-lg cursor-pointer" // full image, no crop
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
