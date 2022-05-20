// libs
import React from "react";
// styles
import "./styles.scss";
// others
import { useLocale } from "@/contexts/LocaleContext";

const Pagination = ({ pagination }) => {
  const { localeDataSource } = useLocale();
  const totalPage = Math.ceil(pagination.total / pagination.limit);

  return (
    <div className="pagination-wrapper">
      <div className="pagination-inner">
        {localeDataSource.page}: {pagination.page} / {totalPage}
      </div>
    </div>
  );
};

export default Pagination;
