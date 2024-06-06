import React from "react";
import { FaAngleLeft, FaArrowLeft, FaUser, FaUserAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div>
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center dark:text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-700  hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="flex items-center mb-4">
                <FaUser className="w-12 h-12 rounded-full mr-4"></FaUser>
                <div>
                  <p className="font-bold text-indigo-600 dark:text-indigo-400">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <svg
                className="w-10 h-10 text-indigo-500 mb-4 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.708 7.292a1 1 0 011.415 1.415L5.414 11H18a1 1 0 110 2H5.414l2.707 2.293a1 1 0 11-1.415 1.415l-4-4a1 1 0 010-1.415l4-4z" />
              </svg>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                "Amazing products! I'm very satisfied with my purchase."
              </p>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500 dark:text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-700  hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="flex items-center mb-4">
                <FaUserAlt className="w-12 h-12 rounded-full mr-4"></FaUserAlt>
                <div>
                  <p className="font-bold text-indigo-600 dark:text-indigo-400">
                    Jane Smith
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <svg
                className="w-10 h-10 text-indigo-500 mb-4 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.708 7.292a1 1 0 011.415 1.415L5.414 11H18a1 1 0 110 2H5.414l2.707 2.293a1 1 0 11-1.415 1.415l-4-4a1 1 0 010-1.415l4-4z" />
              </svg>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                "Excellent customer service and fast shipping."
              </p>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-700  hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="flex items-center mb-4">
                <FaUser className="w-12 h-12 rounded-full mr-4"></FaUser>
                <div>
                  <p className="font-bold text-indigo-600 dark:text-indigo-400">
                    Sarah Brown
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Verified Buyer
                  </p>
                </div>
              </div>
              <svg
                className="w-10 h-10 text-indigo-500 mb-4 dark:text-indigo-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.708 7.292a1 1 0 011.415 1.415L5.414 11H18a1 1 0 110 2H5.414l2.707 2.293a1 1 0 11-1.415 1.415l-4-4a1 1 0 010-1.415l4-4z" />
              </svg>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                "High-quality products at great prices."
              </p>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.54L.244 7.451l6.57-.955L10 1l2.183 5.496 6.57.955-4.999 4.099 1.122 6.54z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
