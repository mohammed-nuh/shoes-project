import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroBanner = () => {
  const products = [
    { id: 1, image: "/banner1_long.png" },
    { id: 2, image: "/banner2_long.png" },
    { id: 3, image: "/banner3_long.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden block">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt="banner"
              className="w-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
