// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { roomStatusList } from "@/mocks/index";

const RoomItem = ({ status, no, personName, type, night }) => {
  const backgroundColor = roomStatusList.findIndex(
    (room) => room.status === status
  );

  return (
    <li
      className="room-item"
      style={{ background: roomStatusList[backgroundColor].color }}
      title={personName}
    >
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
