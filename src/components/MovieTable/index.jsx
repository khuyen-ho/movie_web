import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../../components/Search";
import { Box } from "@material-ui/core";
import Table from "../DataTable";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate } from "../../helpers/time-manager";
import useStyles from "./style";
import { getMovieDetail, getAllMovie } from "../../redux/actions/movieAction";
import { deleteMovie } from "../../redux/actions/adminAction";
import {
  GET_EDIT_MOVIE_STATUS,
  GET_EDITED_MOVIE,
  GET_KEYWORD_MOVIE,
} from "../../redux/actions/actionType";

const MovieTable = (props) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const movies = useSelector((state) => state.movies.list);
  const user = useSelector((state) => state.userLogin);
  const keyWord = useSelector((state) => state.movies.keyWord);

  console.log(movies);

  let headers = [
    "Mã phim",
    "Tên phim",
    "Ngày khởi chiếu",
    "Đánh giá",
    "Hình ảnh",
    "Chỉnh sửa",
    "Xoá",
  ];

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const handleEdit = (account) => {
    dispatch({ type: GET_EDIT_MOVIE_STATUS, payload: true });
    dispatch({ type: GET_EDITED_MOVIE, payload: account });
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id, user.accessToken));
  };

  const handleSearch = () => {
    dispatch(getMovieDetail(keyWord));
  };

  let data = movies.map((movie) => ({
    id: movie.maPhim,
    name: movie.tenPhim,
    startDate: getFullDate(movie.ngayKhoiChieu),
    score: parseFloat(movie.danhGia).toFixed(1),
    poster: <img src={movie.hinhAnh} alt="img" className={styles.image} />,
    edit: (
      <IconButton
        onClick={() => handleEdit(movie)}
        className={styles.iconButton}
      >
        <CreateIcon color="primary" />
      </IconButton>
    ),
    delete: (
      <IconButton
        onClick={() => handleDelete(movie.maPhim)}
        className={styles.iconButton}
      >
        <DeleteIcon color="error" />
      </IconButton>
    ),
  }));

  return (
    <>
      <Box className={styles.search}>
        <Search
          placeholder="Nhập tên phim..."
          state={keyWord}
          dispatchType={GET_KEYWORD_MOVIE}
          searchAction={handleSearch}
        />
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
