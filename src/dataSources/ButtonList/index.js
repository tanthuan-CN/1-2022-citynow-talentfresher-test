// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const buttonList = (localeDataSource, locale, isSwitch, isHide) => [
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
    buttonState: isHide
      ? localeDataSource["Controls.ShowCheckout"]
      : localeDataSource["Controls.HideCheckout"],
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
