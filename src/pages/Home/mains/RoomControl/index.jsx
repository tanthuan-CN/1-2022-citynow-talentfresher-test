// libs
import React from "react";
// layouts
import StatusRoom from "../../components/StatusRoom";
import UtilsControl from "../../components/UtilsControl";
import Pagination from "../../components/Pagination";
// styles
import "./styles.scss";

const RoomControl = () => (
  <article className="room-control-wrapper">
    <div className="room-control-inner">
      <StatusRoom />
      <Pagination />
      <UtilsControl />
    </div>
  </article>
);
export default RoomControl;
