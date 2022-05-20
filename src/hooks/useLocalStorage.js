import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState("");
  useEffect(() => {
    const localValue = window.localStorage.getItem(key);
    setStoredValue(JSON.parse(localValue) || initialValue);
    if (!localValue) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, [initialValue, key]);

  const setValue = (value) => {
    const newValue = value instanceof Function ? value(storedValue) : value;
    setStoredValue(newValue);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    }
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
