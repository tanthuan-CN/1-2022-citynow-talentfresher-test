// libs
import React, { useState, createContext, useContext, useEffect } from "react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";
// locales
import locales from "../locales";
import { keyCode, Time } from "@/constants";

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");
  const [isSwitch, setSwitch] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.LOCALE) {
        e.preventDefault();

        setSwitch(true);
        if (locale === "vi") {
          setLocale("en");
        } else {
          setLocale("vi");
        }
        setTimeout(() => {
          setSwitch(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [locale]);

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, localeDataSource: locales[locale], isSwitch }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
