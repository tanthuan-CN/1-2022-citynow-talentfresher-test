// libs
import usePagination from "@/hooks/usePagination";
import React, { useState } from "react";
// styles
import "./index.scss";
// layouts
import RoomControl from "./mains/RoomControl";
import RoomView from "./mains/RoomView";
// others
import { roomData } from "@/mocks/index";

const HomePage = () => {
  const { pagination, handleChangePage: setPagination } = usePagination(
    1,
    140,
    roomData.length
  );
  const [isShowCheckout, setIsShowCheckout] = useState(true);

  return (
    <div className="container">
      <RoomControl
        pagination={pagination}
        showCheckout={isShowCheckout}
        onChangePagination={setPagination}
        onChangeShowCheckout={setIsShowCheckout}
      />
      <RoomView pagination={pagination} showCheckout={isShowCheckout} />
    </div>
  );
};
export default HomePage;
