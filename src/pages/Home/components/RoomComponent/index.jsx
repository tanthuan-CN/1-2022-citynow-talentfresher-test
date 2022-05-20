// libs
import React from "react";
// others
import "./styles.scss";
import { roomStatus } from "@/constants";

const RoomComponent = ({ personName, roomNo, roomType, night, status }) => (
  <div className="room-wrapper" style={{ backgroundColor: roomStatus[status] }}>
    <div className="room-data">
      <h3 className="room-number">{roomNo}</h3>
      <p className="room-type">{roomType}</p>
    </div>
    <div className="room-night">{night}</div>
    <div className="room-guest">{personName}</div>
  </div>
);

export default RoomComponent;
