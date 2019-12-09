import React from "react";
import _ from "lodash"; // "_" is common convention because lodash is optimized version of library called "underscore"

const Pagination = props => {
  console.log(props.itemsCount);
  const totalPages = Math.ceil(props.itemsCount / props.pageSize);
  if (totalPages === 1) return null; // edge case
  const pages = _.range(1, totalPages + 1); // add 1 to make sure last page is also included

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
