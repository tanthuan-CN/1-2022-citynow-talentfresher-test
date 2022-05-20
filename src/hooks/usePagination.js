// libs
import { keyCode } from "@/constants";
import { useEffect, useState } from "react";

const usePagination = ({ total, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * itemPerPage;
  const totalPage = total / itemPerPage;
  const end = (currentPage - 1) * itemPerPage + itemPerPage;

  const onHandleChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.keyCode === keyCode.PAGE_UP) {
        e.preventDefault();

        if (currentPage < total / itemPerPage) {
          setCurrentPage((cur) => cur + 1);
        }
      } else if (e.keyCode === keyCode.PAGE_DOWN) {
        e.preventDefault();

        if (currentPage > 1) {
          setCurrentPage((cur) => cur - 1);
        } else if (currentPage === 1) {
          setCurrentPage(totalPage);
        }
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [currentPage, itemPerPage, total, totalPage]);

  return {
    currentPage,
    onHandleChange,
    start,
    end,
    totalPage
  };
};

export default usePagination;
