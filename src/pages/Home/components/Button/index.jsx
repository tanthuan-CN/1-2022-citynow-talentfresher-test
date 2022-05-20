// libs
import React from "react";
// others
import "./styles.scss";

const Button = ({ buttonName, buttonState }) => (
  <div className="button-wrapper">
    <div className="button-wrapper-inner">
      <div className="button-name">{buttonName}</div>
      <div className="button-icon">{buttonState}</div>
    </div>
  </div>
);

export default Button;
