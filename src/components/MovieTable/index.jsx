import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate } from "../../helpers/time-manager";
import useStyles from "./style";
import { chooseMovie, deleteMovie } from "../../redux/actions/adminAction";

const MovieTable = (props) => {
  const movies = useSelector((state) => state.movies);
  const userLogin = useSelector((state) => state.userLogin);
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
  const dispatch = useDispatch();
  const handleEdit = (movie) => {
    dispatch(chooseMovie(movie));
  };

  const handleDelete = (movie) => {
    console.log(movie);
    dispatch(deleteMovie(movie.maPhim, userLogin.accessToken, props));
  };

  let data = movies.map((movie) => ({
    id: movie.maPhim,
    name: movie.tenPhim,
    startDate: getFullDate(movie.ngayKhoiChieu),
    score: parseFloat(movie.danhGia).toFixed(1),
    poster: <img src={movie.hinhAnh} alt="img" className={styles.image} />,
    edit: (
      <IconButton onClick={()=>handleEdit(movie)} className={styles.iconButton}>
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton onClick={()=>handleDelete(movie)}  className={styles.iconButton}>
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
