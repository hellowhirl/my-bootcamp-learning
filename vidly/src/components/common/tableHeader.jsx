import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    console.log(path);
    const sortColumn = { ...this.props.sortColumn };
    // first check which column we are in, works for in case we keep changing order for same column
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc"; // should always be ascending when sorting on a new column
    }
    // lastly we need to raise the sort event
    this.props.onSort(sortColumn);
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
