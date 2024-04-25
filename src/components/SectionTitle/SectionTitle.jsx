import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div className="flex justify-center items-center mt-12 mx-auto uppercase">
      <h3 className="text-2xl text-red-700 font-bold">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
