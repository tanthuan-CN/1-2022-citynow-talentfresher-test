// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { roomStatusList } from "@/dataSources/index";

const StatusRoom = () => (
  <div className="status-room-wrapper">
    <div className="status-room-inner">
      <ul className="status-room-list">
        {roomStatusList.map((item) => (
          <li className="status-room-item" key={item.status}>
            <div
              className="status-room-color"
              style={{ background: item.color }}
            ></div>
            <div className="status-room-title">{item.status}</div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StatusRoom;
