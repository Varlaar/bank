import React from "react";

const Button = ({ title, ...props }) => <button {...props}>{title}</button>;

export default Button;
