import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";
import Paper from '@material-ui/core/Paper';  
const chosenChair = [
  { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
];

const ChosenChair = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.chosenChair}>
      {/* <Typography component="h4">Ghế đã chọn: </Typography>
      {chosenChair.map((item, index) => (
        <Typography variant="subtitle" key={index}>
          {item.TenGhe}
        </Typography>
      ))} */}
      <TableContainer  component={Paper}>
        <Table   className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ghế đã chọn</TableCell>
              <TableCell align="right">Giá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chosenChair.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.TenGhe}
                </TableCell>
                <TableCell align="right">{row.Gia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ChosenChair;
