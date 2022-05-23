// libs
import React from "react";
import classNames from "classnames";
// others
import "./styles.scss";

export const Button = ({ isActive, buttonState, buttonName }) => (
  <div className={classNames("button-wrapper", { active: isActive })}>
    <div className="button-wrapper-inner">
      <div className="button-name">{buttonName}</div>
      <div className="button-icon">{buttonState}</div>
    </div>
  </div>
);
