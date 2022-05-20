// libs
import React from "react";
// others
import "./styles.scss";

const RoomStateComponent = ({ status, color }) => (
  <div className="state-wrapper">
    <div className="state-room" style={{ backgroundColor: color }}></div>
    <div className="state-text">{status}</div>
  </div>
);

export default RoomStateComponent;
