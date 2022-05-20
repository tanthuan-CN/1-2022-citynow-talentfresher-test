// libs
import React, { useEffect } from "react";
// styles
import "./styles.scss";
// others
import keyCode from "@/constants/keyCodes";
import { arrStatus } from "@/mocks";
import { useLocale } from "@/contexts/LocaleContext";
import { useRoom } from "@/contexts/RoomContext";

const UtilsControl = ({
  pagination,
  showCheckout,
  onChangePagination,
  onChangeShowCheckout
}) => {
  const { setLocale, locale, localeDataSource } = useLocale();
  const { roomList, setRoomList } = useRoom();
  const getStatus = (status, showCheckout) => {
    if (typeof status !== "string") return status;
    const index = status.indexOf("_");
    if (index === -1) return status;
    if (showCheckout) {
      return status.slice(0, index);
    }
    return status.slice(index + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { page } = pagination;
      if (e.keyCode === keyCode.KEY_F1) {
        e.preventDefault();
        onChangePagination(page + 1);
      }
      if (e.keyCode === keyCode.KEY_F3) {
        e.preventDefault();
        onChangePagination(page - 1);
      }
      if (e.keyCode === keyCode.KEY_F4) {
        e.preventDefault();
        onChangeShowCheckout((status) => !status);
      }
      if (e.keyCode === keyCode.KEY_F12) {
        e.preventDefault();
        setLocale(locale === "vi" ? "en" : "vi");
      }
      if (e.keyCode === keyCode.KEY_F5) {
        e.preventDefault();
        const roomData = roomList.map((room) => ({
          ...room,
          status: arrStatus[Math.floor(Math.random() * 4)]
        }));
        setRoomList(roomData);
      }
    };
    if (typeof window === "object") {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    pagination,
    onChangePagination,
    onChangeShowCheckout,
    locale,
    setLocale,
    roomList,
    setRoomList
  ]);

  return (
    <div className="utils-wrapper">
      <div className="utils-inner">
        <ul className="utils-list">
          {localeDataSource.controls.map((item) => (
            <li className="util-item" key={item.title}>
              <div className="util-title">{item.title}</div>
              <div className="util-status">
                {getStatus(item.status, showCheckout)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UtilsControl;
