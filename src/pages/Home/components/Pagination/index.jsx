// libs
import React from "react";
// others
import "./styles.scss";

const Pagination = ({ currentPage, totalPage }) => (
  <div className="pagination-wrapper">
    Page: {currentPage}/{totalPage}
  </div>
);

export default Pagination;
