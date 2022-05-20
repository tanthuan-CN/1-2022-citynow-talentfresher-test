// libs
import React from "react";
// contexts
import { CaretUpOutlined } from "@ant-design/icons";
// others
import "./styles.scss";

const PageUpButton = () => (
  <div className="button-wrapper">
    <div className="button-wrapper-inner">
      <div className="button-name">F3</div>
      <CaretUpOutlined className="button-icon" />
    </div>
  </div>
);

export default PageUpButton;
