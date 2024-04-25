import React from "react";
import about from "../../../assets/images/about/about.jpeg";
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div>
      <div className=" md:w-10/12 lg:w-8/12 mx-auto">
        <div className="md:flex ">
          <img src={about} className="hidden md:block md:w-80 h-96 ml-20 rounded-lg shadow-2xl" />

          {/* <div className="bg-img bg-fixed bg-cover bg-opacity-5 bg-no-repeat bg-blend-darken text-white pl-14 pr-6 pt-8"> */}
          <div className="pl-14 pr-6 pt-8">
            <h1 className="text-3xl font-bold">About us</h1>
            <p className="py-6 text-xl text-justify">
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
