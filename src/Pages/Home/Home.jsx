import HeroBanner from "../../Components/Banner/hero_banner/HeroBanner";
import CategoryBanner from "../../Components/Banner/category_banner/CategoryBanner";
import ShoesList from "../../Components/ShoesList/ShoesList";

const Home = () => {
    return (
        <div>
            {/* Hero Banner component  */}
            <div className="w-full aspect-[851/315]">
                <HeroBanner />
            </div>


            {/* Category Banner component  */}
            <div className="w-full">
                <CategoryBanner />
            </div>

            {/* Shoe List component  */}
            <div>
                <ShoesList />
            </div>
        </div>
    );
};

export default Home;
