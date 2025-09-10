// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        
        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">CONTACT</h3>
          <p className="text-sm leading-6">
            Rm.1801, Easey Comm. BLDG, 253-261 Hennessy Road, Wanchai, HK 999077
          </p>
          <p className="mt-3 text-sm">support@361sport.com</p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaTiktok className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Basketball Shoes */}
        <div>
          <h3 className="font-bold mb-4">BASKETBALL SHOES</h3>
          <ul className="space-y-2 text-sm">
            <li>Joker Series</li>
            <li>BIG3 Series</li>
            <li>Biospeed Series</li>
            <li>AG Series</li>
            <li>ZEN Series</li>
            <li>DVD Series</li>
          </ul>
        </div>

        {/* Running Shoes */}
        <div>
          <h3 className="font-bold mb-4">RUNNING SHOES</h3>
          <ul className="space-y-2 text-sm">
            <li>Flame Series</li>
            <li>Furious Series</li>
            <li>Biospeed Series</li>
            <li>Miro Nude</li>
            <li>Fierce Series</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">361°</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>361° Tech</li>
            <li>Size Chart</li>
            <li>Order Tracking</li>
            <li>Affiliate</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-bold mb-4">POLICY</h3>
          <ul className="space-y-2 text-sm">
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-5">
          <h3 className="font-bold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get the latest news and discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full sm:w-auto flex-grow text-black rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-400 text-sm py-4 flex flex-col gap-3 md:flex-row justify-between items-center px-6">
        <p className="text-center md:text-left">
          Copyright © <span className="text-yellow-400">361 Degrees 2025</span>{" "}
          all rights reserved.
        </p>
        <div className="flex gap-3 flex-wrap justify-center md:justify-end">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2023_logo.svg" alt="paypal" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;