// libs
import React from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const vi = {
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
      status: "Ẩn checkout_Hiển thị checkout"
    },
    {
      title: "F5",
      status: "Tải lại"
    },
    {
      title: "F12",
      status: "EN"
    }
  ],
  page: "Trang",
  roomStatusList: [
    {
      status: "Còn trống",
      color: "#fbfaf5"
    },
    {
      status: "Chưa vào phòng",
      color: "#89c3eb"
    },
    {
      status: "Đang ở",
      color: "#f8b500"
    },
    {
      status: "Đã rời phòng",
      color: "#b79a5b"
    }
  ]
};
export default vi;
