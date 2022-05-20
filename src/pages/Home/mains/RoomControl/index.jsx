// libs
import React from "react";
// layouts
import StatusRoom from "../../components/StatusRoom";
import UtilsControl from "../../components/UtilsControl";
import Pagination from "../../components/Pagination";
// styles
import "./styles.scss";

const RoomControl = ({
  pagination,
  showCheckout,
  onChangePagination,
  onChangeShowCheckout
}) => (
  <article className="room-control-wrapper">
    <div className="room-control-inner">
      <StatusRoom />
      <Pagination pagination={pagination} />
      <UtilsControl
        pagination={pagination}
        showCheckout={showCheckout}
        onChangePagination={onChangePagination}
        onChangeShowCheckout={onChangeShowCheckout}
      />
    </div>
  </article>
);
export default RoomControl;
