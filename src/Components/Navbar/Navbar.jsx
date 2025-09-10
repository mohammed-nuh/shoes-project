import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="lg:container mx-auto flex items-center justify-between h-16 px-4">

                {/* Company Name */}
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src="/361_black_png.png"
                            alt="361 Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavLink to='/361' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>361°</NavLink>
                    <NavLink to='/new-trend' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>New&Trend</NavLink>
                    <NavLink to='/basketball' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>Basketball</NavLink>
                    <NavLink to='/running' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>Running</NavLink>
                    <NavLink to='/sports' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>Sports</NavLink>
                    <NavLink to='/lifestyle' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>Lifestyle</NavLink>
                    <NavLink to='/about-athlete' className='text-sm text-gray-700 font-inter font-medium capitalize hover:text-teal-600'>About Athlete</NavLink>
                </nav>

                {/* Right Side Icons and Search */}
                <div className="flex items-center gap-4">

                    {/* Search Box */}
                    <form action="#" className="relative hidden md:block">
                        <input type="text" placeholder="Search here..." className="w-64 h-10 bg-gray-100 rounded-lg pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
                            <Search size='20px' />
                        </button>
                    </form>

                    {/* Cart Button */}
                    <button className="btn btn-ghost btn-circle relative">
                        <ShoppingCart />
                        <span className="badge badge-sm bg-teal-500 text-white absolute -top-1 -right-1">2</span>
                    </button>

                    {/* Wishlist Button */}
                    <button className="btn btn-ghost btn-circle">
                        <Heart />
                    </button>

                    {/* User Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <User />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                            <li><Link to="/account">Account</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;