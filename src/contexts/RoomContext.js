// libs
import React, { createContext, useContext, useState, useMemo } from "react";
// others
import { roomData } from "@/mocks/index";

const RoomContext = createContext();

export const ProvideRoom = ({ children }) => {
  const [roomList, setRoomList] = useState(roomData || []);

  const providerRoom = useMemo(
    () => ({
      roomList,
      setRoomList
    }),
    [roomList, setRoomList]
  );

  return (
    <RoomContext.Provider value={providerRoom}>{children}</RoomContext.Provider>
  );
};

export const useRoom = () => useContext(RoomContext);
