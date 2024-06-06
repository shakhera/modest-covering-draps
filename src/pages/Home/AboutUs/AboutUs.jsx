import React from "react";
import aboutImage from "../../../assets/images/about/about.webp";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5">
        <div className="md:w-1/2 w-full md:pr-8 mb-10 md:mb-0">
          <img
            src={aboutImage}
            className="w-full h-auto object-cover object-center rounded-lg shadow-lg"
            alt="About Us"
          />
        </div>
        <div className="md:w-1/2 w-full md:pl-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg leading-relaxed mb-8">
              Hi! I'm Shakhera Khanom, the driving force behind this e-commerce
              website project. As a Modest Covering Draps, I bring a unique
              blend of design, marketing, and technical expertise to the table.
              With a strong commitment to customer satisfaction and brand
              excellence, I'm excited to lead the team in creating an
              exceptional online shopping experience that seamlessly combines
              elegance, functionality, and accessibility.
            </p>
            <div className="flex items-center justify-start">
              <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
