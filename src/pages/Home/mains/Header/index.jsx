// libs
import React from "react";
// components
import Pagination from "../../components/Pagination";
import RoomStateList from "../../components/RoomStateList";
import Controls from "../../components/Controls";
// others
import "./styles.scss";

const Header = ({ currentPage, totalPage }) => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <RoomStateList />
      <Pagination currentPage={currentPage} totalPage={totalPage} />
      <div className="header-controls">
        <Controls />
      </div>
    </div>
  </div>
);

export default Header;
