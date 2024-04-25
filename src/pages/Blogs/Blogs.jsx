import React, { useState } from "react";

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(null);
  const blogData = [
    {
      title: "How do I create an account?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "What is your return policy?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Can I change my shipping address?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Are there any discounts for loyal customers?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="pt-6 lg:pt-24 mb-6 mx-3 md:mx-10 lg:w-2/3 lg:mx-auto ">
      <div className=" border border-gray-500 px-3 lg:px-12 py-3 lg:py-6 rounded-lg font-sans">
        {blogData.map((post, idx) => (
          <div
            key={idx}
            className="border-b border-gray-500 last-of-type:border-none"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full items-center justify-between py-4 font-medium text-black dark:text-white"
            >
              <span className="sm:text-lg md:text-xl">
                {post.title}
              </span>
              <span className="rounded-full p-2 ">
                <svg
                  className="ml-8 mr-7 shrink-0 fill-[#0f0f0f]"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-gray-400 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? "grid-rows-[1fr] pb-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">{post.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
