import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value} // this input field will no longer have its own state - using props to set its value
        autoFocus // this solution is better for giving input field focus
        onChange={onChange}
        // ref={this.username}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
