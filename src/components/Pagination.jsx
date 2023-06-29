import { useState } from "react";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productsPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = totalProducts / productsPerPage;
  // limit the page number shown
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // Paginate

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Go to next page

  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    // show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // Go to prev page

  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    // Show prev set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex mt-20">
      <li
        onClick={paginatePrev}
        className={`${
          currentPage === pageNumbers[0] ? `hidden` : null
        } btn btn-secondary`}
      >
        Prev
      </li>
      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={`${
                currentPage === number ? `bg-primary` : null
              } h-10 w-10`}
            >
              {number}
            </li>
          );
        }
      })}

      <li
        onClick={paginateNext}
        className={`${
          currentPage == pageNumbers[pageNumbers.length - 1] ? `hidden` : null
        } btn btn-secondary `}
      >
        Next
      </li>
      <p>
        <b className="">{`page ${currentPage}`}</b>
        <span>{` of `}</span>
        <b>{`${Math.ceil(totalPages)}`}</b>
      </p>
    </ul>
  );
};

export default Pagination;
