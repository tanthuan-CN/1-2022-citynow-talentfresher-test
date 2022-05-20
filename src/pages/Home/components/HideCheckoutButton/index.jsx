// libs
import React from "react";
import classNames from "classnames";
// contexts
import { useLocale } from "@/contexts/LocalContext";
import { useControl } from "@/contexts/ControlContext";
// others
import "./styles.scss";

export const HideCheckoutButton = () => {
  const { localeDataSource } = useLocale();
  const { isHide, setHide, isHideActive } = useControl();

  return (
    <div
      className={classNames("button-wrapper", { active: isHideActive })}
      onClick={() => setHide(!isHide)}
    >
      <div className="button-wrapper-inner">
        <div className="button-name">F4</div>
        <div className="button-icon">
          {isHide
            ? localeDataSource["Controls.ShowCheckout"]
            : localeDataSource["Controls.HideCheckout"]}
        </div>
      </div>
    </div>
  );
};
