import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  const products = [
    {
      id: 1,
      image: "/src/assets/Banner/banner1.png",
    },
    {
      id: 2,
      image: "/src/assets/Banner/banner2.png",
    },
    {
      id: 3,
      image: "/src/assets/Banner/banner3.png",
    },
  ];

  const categoryBanners = [
    { id: 1, image: "/src/assets/Banner_Categories/banner1_shoe_category.png" },
    { id: 2, image: "/src/assets/Banner_Categories/banner2_shoe_category.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
     <div className="w-full overflow-hidden block">
  <div className="slider-container slider_container w-full h-full">
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} className="banner_slide_item">
          <div className="banner_image w-full h-full flex items-center justify-end">
            <img
              src={product.image}
              alt="banner"
              className="w-full object-cover"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

<div className="w-full overflow-hidden mt-6 block">
  <div className="slider-container slider_container w-full h-full">
    <Slider {...settings}>
      {categoryBanners.map((banner) => (
        <div key={banner.id} className="banner_slide_item">
          <div className="banner_image w-full h-full flex items-center justify-center">
            <img
              src={banner.image}
              alt={`category-banner-${banner.id}`}
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

    </>
  );
};

export default Banner;
