import React from "react";

const LisGroup = props => {
  console.log(props);
  return (
    <ul className="list-group">
      {props.items.map(genre => (
        <li
          key={genre._id}
          className={
            genre === props.currentGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => props.onGenreChange(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default LisGroup;

// list-group-item active
