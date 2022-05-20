// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const en = {
  controls: [
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
      status: "Hide checkout_Show checkout"
    },
    {
      title: "F5",
      status: "Refresh"
    },
    {
      title: "F12",
      status: "VI"
    }
  ],
  page: "Page",
  roomStatusList: [
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
  ]
};
export default en;
