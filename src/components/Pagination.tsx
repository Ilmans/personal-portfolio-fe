import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`inline-block mx-1 cursor-pointer ${
            i ==        currentPage ? "text-teal-300 font-bold" : "text-zinc-500"
          }`}
          onClick={() => handlePageChange(i)}>
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className="flex justify-center mt-4">
      <li
        className={`inline-block mx-1 cursor-pointer ${
          currentPage === 1 ? "text-zinc-500" : "text-teal-300"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}>
        &lt;
      </li>
      {renderPageNumbers()}
      <li
        className={`inline-block mx-1 cursor-pointer ${
          currentPage === totalPages ? "text-zinc-500" : "text-teal-300"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}>
        &gt;
      </li>
    </ul>
  );
};

export default Pagination;
