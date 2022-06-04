// libs
import React from "react";
// contexts
import { useControl } from "@/contexts/ControlContext";
import { useLocale } from "@/contexts/LocalContext";
/// components
import { Button } from "../Button";
// others
import "./styles.scss";
import buttonList from "@/dataSources/ButtonList";

const Controls = () => {
  const controlState = useControl();
  const { localeDataSource, locale, isSwitch } = useLocale();

  const buttons = buttonList(
    localeDataSource,
    locale,
    isSwitch,
    controlState.isHide
  );
  return (
    <div className="controls-wrapper">
      {buttons.map((button) => (
        <Button
          key={button.buttonName}
          {...button}
          isActive={
            typeof button.isActive !== "boolean"
              ? controlState[button.isActive]
              : button.isActive
          }
        />
      ))}
    </div>
  );
};

export default Controls;
