import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ pages, currentPage, onPageChange }) => {
  // const pageNumbers = [...Array(pages).keys()];

  const visiblePageCount = 5;
  const startPage =
    Math.floor(currentPage / visiblePageCount) * visiblePageCount;
  const pageNumbers = Array.from(
    { length: Math.min(visiblePageCount, pages - startPage) },
    (_, i) => startPage + i
  );

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        className={`p-2 border rounded-md ${
          currentPage === 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <ChevronLeft />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`py-2 w-10 border rounded-md ${
            currentPage === page ? "bg-red-500 text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className={`p-2 border rounded-md  ${
          currentPage === pages - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages - 1}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
