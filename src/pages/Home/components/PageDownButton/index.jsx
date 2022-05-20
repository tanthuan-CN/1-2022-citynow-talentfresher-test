// libs
import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
// others
import "./styles.scss";

const PageDownButton = () => (
  <div className="button-wrapper">
    <div className="button-wrapper-inner">
      <div className="button-name">F1</div>
      <CaretDownOutlined className="button-icon" />
    </div>
  </div>
);

export default PageDownButton;
