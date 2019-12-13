import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  // further destructured: picking properties from argument of the function which is the props object
  // const { columns, sortColumn, onSort, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      {/* Here we want to be decoupled from movies - it knows nothing about movies */}
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
