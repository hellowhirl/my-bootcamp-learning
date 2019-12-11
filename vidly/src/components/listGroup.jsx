import React from "react";

const ListGroup = props => {
  const {
    items,
    selectedItem,
    onItemSelect,
    valueProperty,
    textProperty
  } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name", // specify name here for bracket notation so we can work with any kinds of objects
  valueProperty: "_id" // then we can access these properties dynamically
};

export default ListGroup;

// list-group-item active
