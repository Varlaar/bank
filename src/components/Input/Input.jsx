import React from "react";

const Input = (props) =>
  props.type ? <input {...props} /> : <textarea {...props} />;

export default Input;
