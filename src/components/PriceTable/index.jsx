import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import useStyles, { CssButton, CssInput, CssTableContainer } from "./style";

const chosenChair = [
  { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: false },
];

const PriceTable = (props) => {
  const classes = useStyles();
  return (
    <CssTableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Typography className={classes.price} variant="h2">
                0đ
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Box className={classes.detail}>
                <Typography variant="h5">Title</Typography>
                <Typography component="h4">BHD Cinema</Typography>
                <Typography component="h4">23:15 24/12/2002</Typography>
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Box className={classes.chosenChair}>
                <Typography component="h4">Ghế đã chọn: </Typography>
                {chosenChair.map((item, index) => (
                  <Typography key={index}>{item.TenGhe}</Typography>
                ))}
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <CssInput
                className={classes.email}
                placeholder="Email"
                inputProps={{ "aria-label": "description" }}
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
            <CssInput
                className={classes.phone}
                placeholder="Phone"
                inputProps={{ "aria-label": "description" }}
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <CssButton fullWidth>
                <Typography variant='h5'>
                ĐẶT VÉ
                </Typography>
              </CssButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CssTableContainer>
  );
};

export default PriceTable;
