// libs
import React, { useState, useEffect } from "react";
// components
import Header from "./mains/Header";
import RoomList from "./mains/RoomList";
// hocks
import usePagination from "@/hooks/usePagination";
// mocks
import { roomData, arrStatus } from "@/mocks";
// context
import { useControl } from "@/contexts/ControlContext";
// others
import "./style.scss";
import { RoomList as ROOM_CONST } from "@/constants";

const Home = () => {
  const [rooms, setRooms] = useState(roomData);
  const { isRefreshActive } = useControl();
  const { start, end, totalPage, currentPage } = usePagination({
    total: roomData.length,
    itemPerPage: ROOM_CONST.ROOM_PER_PAGE
  });

  useEffect(() => {
    if (isRefreshActive) {
      const newRooms = rooms.map((room) => ({
        ...room,
        status: arrStatus[Math.floor(Math.random() * 4)]
      }));
      setRooms(newRooms);
    }
  }, [isRefreshActive, rooms]);

  return (
    <div className="home-wrapper">
      <div className="home-wrapper-inner">
        <Header totalPage={totalPage} currentPage={currentPage} />
        <RoomList roomData={rooms.slice(start, end)} />
      </div>
    </div>
  );
};

export default Home;
