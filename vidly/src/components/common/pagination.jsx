import React from "react";
import _ from "lodash"; // "_" is common convention because lodash is optimized version of library called "underscore"

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log(currentPage);
  const totalPages = Math.ceil(itemsCount / pageSize);
  if (totalPages === 1) return null; // edge case
  const pages = _.range(1, totalPages + 1); // add 1 to make sure last page is also included

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
