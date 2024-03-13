import React from "react";
import about from "../../../assets/images/about/about.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div className=" w-2/3 mx-auto">
        <div className="flex">
          <img src={about} className="w-72 h-72 rounded-lg shadow-2xl" />
          <div className="px-8">
            <h1 className="text-3xl font-bold">About us</h1>
            <p className="py-6 text-xl text-balance">
              Hi! I'm Shakhera Khanom, the driving force behind this e-commerce
              website project. As a Modest Covering Draps, I bring a unique
              blend of design, marketing, and technical expertise to the table.
              With a strong commitment to customer satisfaction and brand
              excellence, I'm excited to lead the team in creating an
              exceptional online shopping experience that seamlessly combines
              elegance, functionality, and accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
