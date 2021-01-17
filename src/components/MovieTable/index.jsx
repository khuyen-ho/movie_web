import React from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate } from "../../helpers/time-manager";
import useStyles from "./style";

const MovieTable = (props) => {
  const movies = useSelector((state) => state.movies);
  const styles = useStyles();

  let headers = [
    "Mã phim",
    "Tên phim",
    "Ngày khởi chiếu",
    "Đánh giá",
    "Hình ảnh",
    "Chỉnh sửa",
    "Xoá",
  ];

  let data = movies.map((movie) => ({
    id: movie.maPhim,
    name: movie.tenPhim,
    startDate: getFullDate(movie.ngayKhoiChieu),
    score: parseFloat(movie.danhGia).toFixed(1),
    poster: <img src={movie.hinhAnh} alt="img" className={styles.image} />,
    edit: (
      <IconButton className={styles.iconButton}>
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton className={styles.iconButton}>
        <DeleteIcon color="error" />
      </IconButton>
    ),
  }));

  return (
    <>
      <Box className={styles.search}>
        <Search />
      </Box>
      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={data}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
};

export default MovieTable;
