import React from "react";

const Pagination = props => {
  console.log(props.itemsCount);
  let totalPages = Math.ceil(props.itemsCount / props.pageSize);
  console.log(totalPages);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
