// libs
import React from "react";
// components
import RoomComponent from "../../components/RoomComponent";
// others
import "./styles.scss";

const RoomList = ({ roomData }) => (
  <div className="roomlist-wrapper">
    <div className="roomlist-wrapper-inner">
      {roomData.map((room) => (
        <RoomComponent key={room.id} {...room} />
      ))}
    </div>
  </div>
);

export default RoomList;
