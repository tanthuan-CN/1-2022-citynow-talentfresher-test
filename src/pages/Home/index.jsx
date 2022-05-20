// libs
import React from "react";
// components
import Header from "./mains/Header";
import RoomList from "./mains/RoomList";
// hocks
import usePagination from "@/hooks/usePagination";
// mocks
import { roomData } from "@/mocks";
// others
import "./style.scss";
import { RoomList as ROOM_CONST } from "@/constants";

const Home = () => {
  const { start, end, totalPage, currentPage } = usePagination({
    total: roomData.length,
    itemPerPage: ROOM_CONST.ROOM_PER_PAGE
  });

  return (
    <div className="home-wrapper">
      <div className="home-wrapper-inner">
        <Header totalPage={totalPage} currentPage={currentPage} />
        <RoomList roomData={roomData.slice(start, end)} />
      </div>
    </div>
  );
};

export default Home;
