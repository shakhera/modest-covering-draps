import React from "react";
import Marquee from "react-fast-marquee";

const Advertising = () => {
  return (
    <div className="mb-8">
      <Marquee className="bg-gray-100 py-2">
        <h3 className="font-bold text-red-800 text-sm  mx-4">
          50% off on all Borka
        </h3>
        <h3 className="font-bold text-blue-800 text-sm  mx-4">
          Buy 1 Get 1 Free on Women's Shoes
        </h3>
        <h3 className="font-bold text-green-800 text-sm  mx-4">
          Men's Sneaker Sale - Up to 30% Off
        </h3>
        <h3 className="font-bold text-purple-800 text-sm mx-4">
          New Arrivals in Men's Boots
        </h3>
        <h3 className="font-bold text-yellow-800 text-sm mx-4">
          Exclusive Deals on Bags
        </h3>
        <h3 className="font-bold text-pink-800 text-sm  mx-4">
          Caps Collection - Flat 20% Off
        </h3>
        <h3 className="font-bold text-teal-800 text-sm  mx-4">
          Earphones Starting at $10
        </h3>
        <h3 className="font-bold text-orange-800 text-sm mx-4">
          Water Bottles - Buy 2 Get 1 Free
        </h3>
      </Marquee>
    </div>
  );
};

export default Advertising;
