// libs
import React from "react";
// components
import Header from "./mains/Header";
import RoomList from "./mains/RoomList";
// others
import "./style.scss";

const Home = () => (
  <div className="home-wrapper">
    <div className="home-wrapper-inner">
      <Header />
      <RoomList />
    </div>
  </div>
);

export default Home;
