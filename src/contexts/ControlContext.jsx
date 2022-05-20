// libs
import React, { createContext, useContext, useEffect, useState } from "react";
// const
import { keyCode, Time } from "@/constants";

const ControlContext = createContext();

export const ProvideControl = ({ children }) => {
  const [isHide, setHide] = useState(false);
  const [isHideActive, setHideActive] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.SHOW_HIDE) {
        e.preventDefault();

        setHide((isHide) => !isHide);
        setHideActive(true);
        setTimeout(() => {
          setHideActive(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <ControlContext.Provider value={{ isHide, isHideActive, setHide }}>
      {children}
    </ControlContext.Provider>
  );
};

export const useControl = () => useContext(ControlContext);
