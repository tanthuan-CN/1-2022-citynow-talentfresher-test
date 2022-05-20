// libs
import React from "react";
// mocks
import { roomData } from "@/mocks";
// components
import RoomComponent from "../../components/RoomComponent";
// others
import "./styles.scss";

const RoomList = () => (
  <div className="roomlist-wrapper">
    <div className="roomlist-wrapper-inner">
      {roomData.slice(0, 140).map((room) => (
        <RoomComponent key={room.id} {...room} />
      ))}
    </div>
  </div>
);

export default RoomList;
