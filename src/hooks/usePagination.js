// libs
import { keyCode, Time } from "@/constants";
import { useEffect, useState } from "react";

const usePagination = ({ total, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageUp, setIsPageUp] = useState(false);
  const [isPageDown, setIsPageDown] = useState(false);

  const start = (currentPage - 1) * itemPerPage;
  const totalPage = total / itemPerPage;
  const end = (currentPage - 1) * itemPerPage + itemPerPage;

  const onHandleChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const ChangeSwitch = (change) => {
      if (change) {
        setIsPageUp(true);
        setTimeout(() => {
          setIsPageUp(false);
        }, Time.TIME_SHOW_HIDE);
      } else {
        setIsPageDown(true);
        setTimeout(() => {
          setIsPageDown(false);
        }, Time.TIME_SHOW_HIDE);
      }
    };

    const handleKey = (e) => {
      if (e.keyCode === keyCode.PAGE_UP) {
        e.preventDefault();

        if (currentPage < total / itemPerPage) {
          setCurrentPage((cur) => cur + 1);
        } else {
          setCurrentPage(1);
        }
        console.log("Page Up");
        ChangeSwitch(true);
      } else if (e.keyCode === keyCode.PAGE_DOWN) {
        e.preventDefault();

        if (currentPage > 1) {
          setCurrentPage((cur) => cur - 1);
        } else if (currentPage === 1) {
          setCurrentPage(totalPage);
        }

        ChangeSwitch(false);
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
    totalPage,
    isPageUp,
    isPageDown
  };
};

export default usePagination;
