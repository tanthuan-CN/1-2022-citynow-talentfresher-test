// libs
import React, { createContext, useContext, useEffect, useState } from "react";
// const
import { keyCode, Time } from "@/constants";

const ControlContext = createContext();

export const ProvideControl = ({ children }) => {
  const [isHide, setHide] = useState(false);
  const [isHideActive, setHideActive] = useState(false);
  const [isRefreshActive, setRefreshActive] = useState(false);
  const [isPageUp, setIsPageUp] = useState(false);
  const [isPageDown, setIsPageDown] = useState(false);

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
  }, [isHide, isHideActive]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.REFRESH) {
        e.preventDefault();

        setRefreshActive(true);

        setTimeout(() => {
          setRefreshActive(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isRefreshActive]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.PAGE_UP) {
        e.preventDefault();

        setIsPageUp(true);
        setTimeout(() => {
          setIsPageUp(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isPageUp]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.PAGE_DOWN) {
        e.preventDefault();

        setIsPageDown(true);
        setTimeout(() => {
          setIsPageDown(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isPageDown]);

  return (
    <ControlContext.Provider
      value={{
        isHide,
        isHideActive,
        isRefreshActive,
        isPageUp,
        isPageDown
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};

export const useControl = () => useContext(ControlContext);
