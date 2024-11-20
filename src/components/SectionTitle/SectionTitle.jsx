import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <>
      {/* <div className="flex items-center mt-12 mx-auto uppercase ">
        <h3 className="text-2xl text-red-700 font-bold ">|| {heading} ||</h3>
        <div className="w-full border-b bg-neutral-800 "></div>
      </div> */}

      <div className="my-4 w-full">
        <h4 className="bg-gray-500 text-white text-base lg:text-2xl font-bold uppercase px-4 py-2 inline-block rounded-t-sm">
          <span className="text-gray-950">||</span> {heading}{" "}
          <span className="text-gray-950">||</span>
        </h4>
        <div className="w-full border-b bg-neutral-800 "></div>
      </div>
    </>
  );
};

export default SectionTitle;
