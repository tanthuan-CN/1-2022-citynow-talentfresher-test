// libs
import React from "react";
import classNames from "classnames";
// contexts
import { useControl } from "@/contexts/ControlContext";
// others
import "./styles.scss";
import { roomStatus } from "@/constants";

const RoomComponent = ({ personName, roomNo, roomType, night, status }) => {
  const { isHide } = useControl();

  return (
    <div
      className={classNames("room-wrapper", {
        hide: isHide && status === "ALREADY_OUT"
      })}
      style={{ backgroundColor: roomStatus[status] }}
    >
      <div className="room-data">
        <h3 className="room-number">{roomNo}</h3>
        <p className="room-type">{roomType}</p>
      </div>
      <div className="room-night">{night}</div>
      <div className="room-guest">{personName}</div>
    </div>
  );
};

export default RoomComponent;
