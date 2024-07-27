"use client";
import Arrow from "@/components/icons/Arrow";
import DoubleArrow from "@/components/icons/DoubleArrow";
import Reload from "@/components/icons/Reload";
import { useMemo, useState } from "react";
import { PaginationProps } from "@/types/types";

const Pagination = ({
  totalCount,
  pageSize,
  loading = false,
  getCurrentPage = () => {},
  refresh = () => {},
  reset,
}: PaginationProps) => {
  const totalPage = Math.ceil(totalCount / pageSize);
  const [pageNum, setPageNum] = useState("1");
  const [currentPageNum, setCurrentPageNum] = useState(1);

  useMemo(() => getCurrentPage(currentPageNum), [currentPageNum]);

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const tempNum =
        Number(pageNum) > 0
          ? totalPage < Number(pageNum)
            ? totalPage
            : Number(pageNum)
          : 1;
      setCurrentPageNum(tempNum);
      setPageNum(tempNum.toString());
    }
  };

  useMemo(() => {
    setPageNum("1");
    setCurrentPageNum(1);
  }, [reset]);

  return (
    <div className="flex items-center justify-between min-h-10 w-full text-gray-700 select-none">
      <div className={`flex gap-2 ${loading && "pointer-events-none"}`}>
        <button
          disabled={currentPageNum === 1}
          className={currentPageNum === 1 ? "cursor-not-allowed" : ""}
          onClick={() => {
            setCurrentPageNum(1);
            setPageNum("1");
          }}
        >
          <DoubleArrow />
        </button>
        <button
          disabled={1 > currentPageNum - 1}
          className={1 > currentPageNum - 1 ? "cursor-not-allowed" : ""}
          onClick={() => {
            const temPage = currentPageNum - 1;
            if (1 <= temPage) {
              setCurrentPageNum(temPage);
              setPageNum(temPage.toString());
            }
          }}
        >
          <Arrow />
        </button>
        <div className="flex gap-2 px-2">
          <div className="">Page</div>
          <input
            type="number"
            className="bg-slate-400 rounded-full w-14 px-2 flex text-center outline-none"
            value={pageNum}
            onChange={(e) => setPageNum(e.target.value)}
            onKeyDown={handleEnter}
            onBlur={() => setPageNum(currentPageNum.toString())}
          />
          <div> of {totalPage}</div>
        </div>
        <button
          disabled={!(totalPage > currentPageNum)}
          className={`rotate-180 ${
            !(totalPage > currentPageNum) && "cursor-not-allowed"
          }`}
          onClick={() => {
            const temPage = currentPageNum + 1;
            if (totalPage >= temPage) {
              setCurrentPageNum(temPage);
              setPageNum(temPage.toString());
            }
          }}
        >
          <Arrow />
        </button>
        <button
          disabled={currentPageNum === totalPage}
          className={`rotate-180 ${
            currentPageNum === totalPage && "cursor-not-allowed"
          }`}
          onClick={() => {
            setCurrentPageNum(totalPage);
            setPageNum(totalPage.toString());
          }}
        >
          <DoubleArrow />
        </button>
        <button onClick={() => refresh()}>
          <Reload />
        </button>
      </div>
      <div>
        Displaying reports{" "}
        {currentPageNum * pageSize - pageSize
          ? currentPageNum * pageSize - pageSize
          : 1}{" "}
        -{" "}
        {totalCount > currentPageNum * pageSize
          ? currentPageNum * pageSize
          : totalCount}{" "}
        of {totalCount}
      </div>
    </div>
  );
};

export default Pagination;
