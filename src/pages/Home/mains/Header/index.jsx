// libs
import React from "react";
// components
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import RoomStateList from "../../components/RoomStateList";
// dataSource
import buttonList from "@/dataSources/ButtonList";
// others
import "./styles.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <RoomStateList />
      <Pagination />
      {buttonList.map((button) => (
        <Button {...button} />
      ))}
    </div>
  </div>
);

export default Header;
