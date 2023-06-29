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
    <ul className="join mt-[1rem] pt-[1rem]   flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <li
          onClick={paginatePrev}
          className={`text-5xl cursor-pointer hover:scale-125 duration-300 ${
            currentPage === pageNumbers[0] ? `hidden` : null
          } `}
        >
          «
        </li>
        {pageNumbers.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                key={number}
                onClick={() => paginate(number)}
                className={`join-item btn ${
                  currentPage === number ? `bg-primary text-white` : null
                } `}
              >
                {number}
              </li>
            );
          }
        })}

        <li
          onClick={paginateNext}
          className={`text-5xl cursor-pointer hover:scale-125 duration-300 ${
            currentPage == pageNumbers[pageNumbers.length - 1] ? `hidden` : null
          }  `}
        >
          »
        </li>
      </div>
      <p>
        <b className="text-primary">{`Pagina ${currentPage}`}</b>
        <span>{` de `}</span>
        <b>{`${Math.ceil(totalPages)}`}</b>
      </p>
    </ul>
  );
};

export default Pagination;
