// libs
import React from "react";
// layouts
import RoomList from "../../components/RoomList";
// styles
import "./styles.scss";

const RoomView = () => (
  <article className="room-view-wrapper">
    <div className="room-view-inner">
      <RoomList />
    </div>
  </article>
);
export default RoomView;
