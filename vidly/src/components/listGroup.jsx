import React from "react";

const LisGroup = props => {
  const {
    items,
    currentGenre,
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
            item === currentGenre ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default LisGroup;

// list-group-item active
