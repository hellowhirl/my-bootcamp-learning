import React from "react";

const SearchForm = ({ value, onChange }) => {
  return (
    <input
      value={value}
      className="form-control"
      placeholder={"Search..."}
      onChange={e => onChange(e.currentTarget.value)} // handle onChange event by raising a custom event
    />
  );
};

export default SearchForm;
