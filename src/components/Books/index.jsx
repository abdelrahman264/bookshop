import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Paginate from "../Pagination";

const Books = () => {
  const [pageNo, setPageNo] = useState(1);

  const { isLoading, data, isSuccess } = useQuery(["books", pageNo], () => {
    return axios
      .get(`http://gutendex.com/books/?page=${pageNo}`, "books", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        return result.data;
      });
  });

  const handlePagination = (page) => {
    setPageNo(page);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ml-36 mt-28">
        {isSuccess &&
          data?.results?.map((book) => {
            return (
              <div className="w-96 mb-10">
                <img
                  src={book.formats["image/jpeg"]}
                  width="200px"
                  height="200px"
                  alt="img"
                />
                <p className="font-bold  text-sm">{book?.title}</p>
                <p className="text-stone-400">
                  {book?.authors?.map((author) => author?.name)}
                </p>
              </div>
            );
          })}
      </div>
      <Paginate count={data?.count} handlePagination={handlePagination} />
    </div>
  );
};
export default Books;
