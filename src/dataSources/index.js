// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

export const controls = [
  {
    title: "F1",
    status: <CaretDownOutlined />
  },
  {
    title: "F3",
    status: <CaretUpOutlined />
  },
  {
    title: "F4",
    status: "Show checkout"
  },
  {
    title: "F5",
    status: "Refresh"
  },
  {
    title: "F12",
    status: "VI"
  }
];
export const roomStatusList = [
  {
    status: "Vacant",
    color: "#fbfaf5"
  },
  {
    status: "Not yet checkin",
    color: "#89c3eb"
  },
  {
    status: "Staying",
    color: "#f8b500"
  },
  {
    status: "Already out",
    color: "#b79a5b"
  }
];
