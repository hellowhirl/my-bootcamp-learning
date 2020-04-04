import React from "react";
import PropTypes from "prop-types";
import _ from "lodash"; // "_" is common convention because lodash is optimized version of library called "underscore"

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
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
            <div
              className="page-link"
              href=""
              onClick={() => onPageChange(page)}
            >
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
