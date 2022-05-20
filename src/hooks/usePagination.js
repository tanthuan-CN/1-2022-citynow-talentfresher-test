import { useCallback, useState } from "react";

const usePagination = (page, limit, total) => {
  const [pagination, setPagination] = useState({
    page,
    limit,
    total
  });
  const totalPage = Math.ceil(total / limit);
  const handleChangePage = useCallback(
    (newPage) => {
      if (typeof newPage !== "number") return;
      if (newPage >= 1 && newPage <= totalPage)
        setPagination({ ...pagination, page: newPage });
      if (newPage < 1) setPagination({ ...pagination, page: totalPage });
      if (newPage > totalPage) setPagination({ ...pagination, page: 1 });
    },
    [totalPage, pagination]
  );
  return { pagination, handleChangePage };
};
export default usePagination;
