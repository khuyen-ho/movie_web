import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Letter from "../Alphabet";
import Seat from "../Seat";

const SeatList = ({ list }) => {
  let rowIndex = 0;

  const RenderSeats = (type, currentRow = 0) => {
    return list
      .filter((seat) => seat.loaiGhe === type)
      .map((seat, index) => {
        if (index % 11 === 0) {
          rowIndex++;
          return (
            <>
              <Grid key={index} item xs={1}>
                <Letter index={index / 11 + currentRow} />
              </Grid>
              <Grid key={seat.maGhe} item xs={1}>
                <Seat
                  seat={seat}
                  type={type}
                  seatNumber={seat.tenGhe}
                  reserved={seat.daDat}
                />
              </Grid>
            </>
          );
        }

        return (
          <>
            <Grid key={seat.maGhe} item xs={1}>
              <Seat
                seat={seat}
                type={type}
                seatNumber={seat.tenGhe}
                reserved={seat.daDat}
              />
            </Grid>
          </>
        );
      });
  };

  return (
    <Grid container>
      <Grid item xs={11}>
        <Grid container>{RenderSeats("Thuong")}</Grid>
        <Grid container>{RenderSeats("Vip", rowIndex)}</Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

SeatList.propTypes = {
  list: PropTypes.array,
};

SeatList.defaultProps = {
  list: [],
};

export default SeatList;
