// libs
import React from "react";
// components
import RoomStateComponent from "../RoomStateComponenet";
// dataSource
import statusList from "@/dataSources/StateList";
// others
import "./styles.scss";

const RoomStateList = () => (
  <div className="statelist-wrapper">
    {statusList.map((roomState) => (
      <RoomStateComponent key={roomState.status} {...roomState} />
    ))}
  </div>
);

export default RoomStateList;
