// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
// component
import PageUpButton from "@/pages/Home/components/PageUpButton";
import PageDownButton from "@/pages/Home/components/PageDownButton";
import { HideCheckoutButton } from "@/pages/Home/components/HideCheckoutButton";
import RefreshButton from "@/pages/Home/components/RefreshButton";
import LocaleButton from "@/pages/Home/components/LocaleButton";

const buttonList = [
  {
    buttonName: "F1",
    buttonState: <CaretDownOutlined />,
    buttonType: <PageUpButton buttonName="F1" buttonState="Hello" />
  },
  {
    buttonName: "F3",
    buttonType: <PageDownButton buttonName="F1" buttonState="Hello" />,
    buttonState: <CaretUpOutlined />
  },
  {
    buttonName: "F4",
    buttonType: <HideCheckoutButton buttonName="F1" buttonState="Hello" />,
    buttonState: "Controls.HideCheckout"
  },
  {
    buttonName: "F5",
    buttonType: <RefreshButton buttonName="F1" buttonState="Hello" />,
    buttonState: "Controls.Refresh"
  },
  {
    buttonName: "F12",
    buttonType: <LocaleButton buttonName="F1" buttonState="Hello" />,
    buttonState: "Controls.Vietnamese"
  }
];

export default buttonList;
