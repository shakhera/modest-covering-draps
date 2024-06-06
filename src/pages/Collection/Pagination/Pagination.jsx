import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  const pageNumbers = [...Array(pages).keys()];

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        className="p-2 border rounded-md hover:bg-gray-200"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <FaAngleLeft />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`p-2 border rounded-md ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="p-2 border rounded-md hover:bg-gray-200"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages - 1}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
