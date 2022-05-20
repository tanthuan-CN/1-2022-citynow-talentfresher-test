// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { controls } from "@/dataSources/index";

const UtilsControl = () => (
  <div className="utils-wrapper">
    <div className="utils-inner">
      <ul className="utils-list">
        {controls.map((item) => (
          <li className="util-item">
            <div className="util-title">{item.title}</div>
            <div className="util-status">{item.status}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default UtilsControl;
