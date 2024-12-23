import React from "react";

const Phone = () => {
  return (
    <div>
      {/* phone  */}
      <div className="relative text-black mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          {/* // TODO : necessary code  */}
          <h2 className="text-6xl">Hi...........!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aut necessitatibus nobis, exercitationem, unde vero
            neque libero, magnam perferendis recusandae voluptas veniam officiis
            voluptatibus temporibus assumenda adipisci ipsum sint maxime!
          </p>
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
            className="dark:hidden h-[140px] md:h-[262px] w-full rounded-xl"
            alt=""
          />
          <img
            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
            className="hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Phone;
