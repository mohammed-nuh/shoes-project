// Cart.jsx
import React from "react";

const Cart = () => {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Ava Rover",
      price: 120,
      quantity: 1,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8402dfb2-01b5-4b10-bffb-742d6e327d9b/NIKE+AVA+ROVER.png",
    },
    {
      id: 2,
      name: "Vomero 18",
      price: 90,
      quantity: 2,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10486f07-6e35-463f-8900-5fa8ffe5232b/NIKE+VOMERO+18.png",
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

      {/* Cart Items */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <div className="flex items-center gap-3 mt-2">
                  <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <p className="font-semibold">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border p-6 rounded-md h-fit bg-gray-50">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
