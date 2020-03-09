import React from "react";

const SearchForm = ({ value, propForOnchange }) => {
  return (
    <input
      value={value}
      className="form-control"
      placeholder={"Search..."}
      // handle onChange event by raising a custom event - which we can call anything
      onChange={e => propForOnchange(e.currentTarget.value)}
    />
  );
};

export default SearchForm;
