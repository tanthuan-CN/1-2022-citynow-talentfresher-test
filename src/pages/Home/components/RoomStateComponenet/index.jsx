// libs
import React from "react";
// others
import "./styles.scss";

const RoomStateComponent = ({ status, color }) => (
  <div className="room-state-wrapper">
    <div className="state-color" style={{ backgroundColor: color }}></div>
    <div className="state-text">{status}</div>
  </div>
);

export default RoomStateComponent;
