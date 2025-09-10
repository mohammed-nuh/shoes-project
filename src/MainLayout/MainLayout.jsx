import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './../Components/Navbar/Navbar';
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";
import Page361 from "../Pages/Page361";
import NewTrend from "../Pages/NewTrend";
import Basketball from "../Pages/Basketball";
import Running from "../Pages/Running";
import Sports from "../Pages/Sports";
import Lifestyle from "../Pages/Lifestyle";
import AboutAthlete from "../Pages/AboutAthlete";
import Category1 from "../Pages/Category1";
import Category2 from "../Pages/Category2";
import Category3 from "../Pages/Category3";
import Category4 from "../Pages/Category4";
import Category5 from "../Pages/Category5";
import Category6 from "../Pages/Category6";



const MainLayout = () => {
    return (

        <BrowserRouter>
            {/* navbar  */}
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home/>
                    </AuthCheck>
                } />
                <Route path="auth" element={<Auth/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>

                {/* new pages routes */}
                <Route path="361" element={<Page361 />} />
                <Route path="new-trend" element={<NewTrend />} />
                <Route path="basketball" element={<Basketball />} />
                <Route path="running" element={<Running />} />
                <Route path="sports" element={<Sports />} />
                <Route path="lifestyle" element={<Lifestyle />} />
                <Route path="about-athlete" element={<AboutAthlete />} />

                {/* category routes */}
                <Route path="categories/cat1" element={<Category1 />} />
                <Route path="categories/cat2" element={<Category2 />} />
                <Route path="categories/cat3" element={<Category3 />} />
                <Route path="categories/cat4" element={<Category4 />} />
                <Route path="categories/cat5" element={<Category5 />} />
                <Route path="categories/cat6" element={<Category6 />} />

                {/* not found routes  */}
                <Route path="*" element={<Error/> } />
            </Routes>

            {/* footer component  */}
            <Footer />

        </BrowserRouter>

    );
};

export default MainLayout;