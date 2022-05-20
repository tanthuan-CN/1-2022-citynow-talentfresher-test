// libs
import React from "react";
// contexts
import { useLocale } from "@/contexts/LocalContext";
// others
import "./styles.scss";

const RefreshButton = () => {
  const { localeDataSource } = useLocale();

  return (
    <div className="button-wrapper">
      <div className="button-wrapper-inner">
        <div className="button-name">F5</div>
        <div className="button-icon">
          {localeDataSource["Controls.Refresh"]}
        </div>
      </div>
    </div>
  );
};

export default RefreshButton;
