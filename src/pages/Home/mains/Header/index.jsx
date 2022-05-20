// libs
import React, { useEffect } from "react";
// components
import Pagination from "../../components/Pagination";
import RoomStateList from "../../components/RoomStateList";
// contexts
import { useLocale } from "@/contexts/LocalContext";
// others
import "./styles.scss";
import Controls from "../../components/Controls";

const Header = ({ currentPage, totalPage }) => {
  const { setLocale } = useLocale();

  useEffect(() => {
    setLocale("vi");
  }, []);

  return (
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
};

export default Header;
