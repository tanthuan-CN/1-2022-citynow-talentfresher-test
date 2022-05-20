// libs
import React from "react";
// styles
import "./styles.scss";
// layouts
import RoomItem from "../RoomItem";
// others
import { roomData } from "@/mocks/index";

const RoomList = () => (
  <ul className="room-list">
    {roomData.slice(0, 140).map((room) => (
      <RoomItem
        key={room.id}
        status={room.status}
        no={room.roomNo}
        personName={room.personName}
        type={room.roomType}
        night={room.night}
      />
    ))}
  </ul>
);

export default RoomList;
