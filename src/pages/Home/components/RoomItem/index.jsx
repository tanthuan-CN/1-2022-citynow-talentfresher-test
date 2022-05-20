// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { roomStatusList } from "@/mocks/index";

const RoomItem = ({ status, no, personName, type, night, showCheckout }) => {
  const backgroundColor = roomStatusList.findIndex(
    (room) => room.status === status
  );
  const roomItemStyles = {
    visibility:
      status === "ALREADY_OUT" && !showCheckout ? "hidden" : "visible",
    background: roomStatusList[backgroundColor].color
  };

  return (
    <li className="room-item" style={roomItemStyles} title={personName}>
      <div className="room-info">
        <div className="room-id">{no}</div>
        <div className="room-desc">
          <div className="room-type">{type}</div>
          <div className="room-people">{night}</div>
        </div>
      </div>
      <div className="room-name">{personName}</div>
    </li>
  );
};

export default RoomItem;
