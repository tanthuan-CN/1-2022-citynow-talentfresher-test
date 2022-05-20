// libs
import React from "react";
// layouts
import RoomList from "../../components/RoomList";
// styles
import "./styles.scss";

const RoomView = ({ pagination, showCheckout }) => (
  <article className="room-view-wrapper">
    <div className="room-view-inner">
      <RoomList pagination={pagination} showCheckout={showCheckout} />
    </div>
  </article>
);
export default RoomView;
