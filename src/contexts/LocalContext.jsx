// libs
import React, { createContext, useContext } from "react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";
// locales
import locales from "../locales";

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage("locale", "vi");

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, localeDataSource: locales[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
