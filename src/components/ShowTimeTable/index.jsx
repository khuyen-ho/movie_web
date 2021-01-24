import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropDown from "../../components/DropDown";
import {
  Grid,
  Box,
  Collapse,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { getFullDate, getTime } from "../../helpers/time-manager";
import Table from "../DataTable";
import useStyles from "./style";

const ShowTimeTable = (props) => {
  const cinemaSystems = useSelector((state) => state.cinemaSystems_);
  const cinemas = useSelector((state) => state.cinemas_);
  const movies = useSelector((state) => state.movies_);
  const showTimes = useSelector((state) => state.showTimes_);
  const [search, setSearch] = useState(false);
  const styles = useStyles();

  let cinemaSystemList = cinemaSystems.map((system) => system.tenHeThongRap);
  let cinemaList = cinemas.map((cinema) => cinema.tenCumRap);
  let movieList = movies.map((movies) => movies.tenPhim);

  let headers = [
    "Mã lịch chiếu",
    "Tên rạp",
    "Ngày chiếu",
    "Giờ chiếu",
    "Giá vé",
    "Xoá",
  ];

  let tableData = showTimes[0].lstCumRap[0].danhSachPhim[0].lstLichChieuTheoPhim.map(
    (showTime) => ({
      id: showTime.maLichChieu,
      cinemaNumber: showTime.tenRap,
      showTimeDate: getFullDate(showTime.ngayChieuGioChieu),
      startTime: getTime(showTime.ngayChieuGioChieu),
      price: showTime.giaVe,
      delete: (
        <IconButton className={styles.iconButton}>
          <DeleteIcon color="error" />
        </IconButton>
      ),
    })
  );

  return (
    <>
      <FormControlLabel
        classes={{ root: styles.checkbox, label: styles.label }}
        control={
          <Checkbox
            checked={search}
            onChange={() => setSearch(!search)}
            name="search"
          />
        }
        label="Tìm kiếm"
      />
      <Collapse in={search} timeout="auto">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown label="Hệ thống rạp" list={cinemaSystemList} />
          </Grid>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown label="Cụm rạp" list={cinemaList} />
          </Grid>
          <Grid item xs={12} md={4} className={styles.dropDown}>
            <DropDown label="Phim" list={movieList} />
          </Grid>
        </Grid>
      </Collapse>

      <Box className={styles.table}>
        <Table
          headers={headers}
          rows={tableData}
          maxWidth={"100%"}
          maxHeight={500}
        />
      </Box>
    </>
  );
};

export default ShowTimeTable;
