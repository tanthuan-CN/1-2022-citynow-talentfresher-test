// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { useLocale } from "@/contexts/LocaleContext";

const StatusRoom = () => {
  const { localeDataSource } = useLocale();
  return (
    <div className="status-room-wrapper">
      <div className="status-room-inner">
        <ul className="status-room-list">
          {localeDataSource.roomStatusList.map((item) => (
            <li className="status-room-item" key={item.status}>
              <div
                className="status-room-color"
                style={{ background: item.color }}
              ></div>
              <div className="status-room-title">{item.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusRoom;
