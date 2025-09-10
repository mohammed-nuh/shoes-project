import React, { useState, useEffect } from "react";

const ShoesList = () => {
  const [shoesData, setShoesData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  // Fetch shoes data from API on component mount
  useEffect(() => {
    const fetchShoesData = async () => {
      try {
        const response = await fetch('https://6835b8aecd78db2058c2d6cc.mockapi.io/shoes');
        const data = await response.json();
        setShoesData(data);
      } catch (error) {
        console.error('Error fetching shoes data:', error);
      }
    };

    fetchShoesData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      prev + 4 > shoesData.length ? shoesData.length : prev + 4
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shoesData.slice(0, visibleCount).map((shoe) => (
          <div
            key={shoe.id}
            className="relative bg-gray-100 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 h-96"
          >
            {/* Badge */}
            <span className="absolute top-3 right-3 bg-orange-500 text-white text-sm px-3 py-1 rounded z-10">
              Sale
            </span>

            {/* Images filling the card */}
            <img
              src={shoe.productImage}
              alt={shoe.product}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:translate-y-full"
            />
            <img
              src={shoe.hover_image}
              alt={shoe.product}
              className="absolute inset-0 w-full h-full object-cover -translate-y-full transition-transform duration-500 group-hover:translate-y-0"
            />

            {/* Gradient overlay with product info */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-lg font-semibold">{shoe.product}</h3>
              <div className="mt-1">
                <span className="text-gray-300 line-through mr-2 text-sm">
                  ${shoe.totalAmount.toFixed(2)} USD
                </span>
                <span className="text-red-400 font-bold text-lg">
                  ${shoe.discountedAmount.toFixed(2)} USD
                </span>
              </div>
            </div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white px-5 py-2 rounded font-medium shadow">
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < shoesData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-8 py-3 bg-black text-white text-base rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Show More 
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoesList;
