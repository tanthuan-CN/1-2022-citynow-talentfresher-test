// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const buttonList = (localeDataSource, locale, isSwitch) => [
  {
    buttonName: "F1",
    buttonState: <CaretDownOutlined />,
    isActive: "isPageDown"
  },
  {
    buttonName: "F3",
    buttonState: <CaretUpOutlined />,
    isActive: "isPageUp"
  },
  {
    buttonName: "F4",
    buttonState:
      locale === "vi"
        ? localeDataSource["Controls.Vietnamese"]
        : localeDataSource["Controls.English"],
    isActive: "isHide"
  },
  {
    buttonName: "F5",
    buttonState: localeDataSource["Controls.Refresh"],
    isActive: "isRefresh"
  },
  {
    buttonName: "F12",
    buttonState:
      locale === "vi"
        ? localeDataSource["Controls.Vietnamese"]
        : localeDataSource["Controls.English"],
    isActive: isSwitch
  }
];

export default buttonList;
