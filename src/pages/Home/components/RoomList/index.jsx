// libs
import React from "react";
// styles
import "./styles.scss";
// layouts
import RoomItem from "../RoomItem";
// others
// import { roomData } from "@/mocks/index";
import { useRoom } from "@/contexts/RoomContext";

const RoomList = ({ pagination, showCheckout }) => {
  const startIndex = pagination.page * pagination.limit - pagination.limit;
  const finalIndex = pagination.page * pagination.limit;
  const { roomList: roomData } = useRoom();

  return (
    <ul className="room-list">
      {roomData.slice(startIndex, finalIndex).map((room) => (
        <RoomItem
          key={room.id}
          status={room.status}
          no={room.roomNo}
          personName={room.personName}
          type={room.roomType}
          night={room.night}
          showCheckout={showCheckout}
        />
      ))}
    </ul>
  );
};

export default RoomList;
