import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";

const chosenChair = [
  { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
];

const ChosenChair = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.chosenChair}>
      <Typography component="h4">Ghế đã chọn: </Typography>
      {chosenChair.map((item, index) => (
        <Typography variant="subtitle" key={index}>
          {item.TenGhe}
        </Typography>
      ))}
    </Box>
  );
};
export default ChosenChair;
