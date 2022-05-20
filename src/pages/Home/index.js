// libs
import React from "react";
// styles
import "./index.scss";
// layouts
import RoomControl from "./mains/RoomControl";
import RoomView from "./mains/RoomView";

const HomePage = () => (
  <div className="container">
    <RoomControl />
    <RoomView />
  </div>
);
export default HomePage;
