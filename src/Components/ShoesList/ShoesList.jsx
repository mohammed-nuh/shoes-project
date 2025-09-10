import React, { useState } from "react";

const ShoesList = () => {
  // Dummy shoe data
  const shoesData = [
    {
      id: 1,
      product: "Joker 1 GT SE 'NYC'",
      productImage:
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/44f222ab-96b6-43b9-82e7-9a1bd888611d/NIKE+COURT+VISION+LO.png",
      hover_image:
        "https://images-cdn.ubuy.co.in/633b4d0ec453a05ef838979c-damyuan-running-shoes-men-fashion.jpg",
      oldPrice: 189.0,
      newPrice: 169.0,
    },
    {
      id: 2,
      product: "Joker 1 GT SE 'MIRO'",
      productImage:
        "https://www.google.com/imgres?q=joker%201%20gt%20se%20miro&imgurl=https%3A%2F%2F361sport.com%2Fcdn%2Fshop%2Ffiles%2FJOKER1GTPEMIRO_1_grande.jpg%3Fv%3D1744613943&imgrefurl=https%3A%2F%2F361sport.com%2Fen-es%2Fproducts%2Fjoker-1-gt-se-miro&docid=Tn5ytba2w7JIzM&tbnid=rrCJAh6qSoRynM&vet=12ahUKEwiYhbC45s2PAxWMsVYBHcGvNdoQM3oECBkQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwiYhbC45s2PAxWMsVYBHcGvNdoQM3oECBkQAA",
      hover_image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/3f2e0192ad8d4c0c82deada800c4f323_9366/Ultraboost_22_Shoes_White_GX3065_01_standard.jpg",
      oldPrice: 189.0,
      newPrice: 169.0,
    },
    {
      id: 3,
      product: "Joker 1 GT 'Denver'",
      productImage:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369666/03/sv01/fnd/IND/fmt/png",
      hover_image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369666/01/sv01/fnd/IND/fmt/png",
      oldPrice: 189.0,
      newPrice: 169.0,
    },
    {
      id: 4,
      product: "Joker 1 GT PE 'CQT'",
      productImage:
        "https://www.converse.in/media/catalog/product/1/0/10016263-A01-001-1600.png",
      hover_image:
        "https://www.converse.in/media/catalog/product/1/0/10016263-A01-002-1600.png",
      oldPrice: 189.0,
      newPrice: 169.0,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      prev + 4 > shoesData.length ? shoesData.length : prev + 4
    );
  };

  return (
    <div className="p-8">
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
                  ${shoe.oldPrice.toFixed(2)} USD
                </span>
                <span className="text-red-400 font-bold text-lg">
                  ${shoe.newPrice.toFixed(2)} USD
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
