import React from "react";

const Input = (props) => (
  <input
    className={props?.className}
    value={props?.value}
    placeholder={props?.placeholder}
    onInput={props?.onInput}
    onChange={props?.handleInputTextChange}
  />
);

export default Input;
