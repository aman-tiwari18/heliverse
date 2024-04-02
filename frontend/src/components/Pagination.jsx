import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="block text-center">
      <ul className="inline-flex list-none">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`mx-1 ${
              currentPage === number
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
          >
            <button
              onClick={() => onPageChange(number)}
              className="block px-3 py-2"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
