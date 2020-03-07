import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false }; // our 3rd argument - code becomes more expressive
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    // one approach to map an array into an object
    // also able to use .map() or .reduce()
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // what ever 'name' is used at runtime, that will be used to set the key
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema); // no need for 3rd argument, we don't want to abort early

    // ternary operator below 2 lines:
    // if (error) return null;
    // return error.details[0].message;
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();

    // Call the server --> save the changes --> redirect user to different page
    // const username = document.getElementById('username').nodeValue; // this is the plain JS approach

    // if you really need to access the DOM, this is the way to do it
    // should not over use this method
    // const username = this.username.current.value;
  };

  handleChange = ({ currentTarget: input }) => {
    // live validation after onChange event is triggered
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    // if no error message then we should delete the existing property so the error is cleared up
    else delete errors[input.name];

    const data = { ...this.state.data };
    // give each field a 'name' property for bracket notation
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        options={options}
        value={data[name]} // we can use bracket notation because we have property with same name in 2 objects
        onChange={this.handleChange}
        error={errors[name]} // we can use bracket notation because we have property with same name in 2 objects
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]} // we can use bracket notation because we have property with same name in 2 objects
        onChange={this.handleChange}
        error={errors[name]} // we can use bracket notation because we have property with same name in 2 objects
      />
    );
  }

  renderSearch() {
    return <Input />;
  }
}

export default Form;
