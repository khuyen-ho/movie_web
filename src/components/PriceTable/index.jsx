import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";
import Input from "../Input";
import useStyles, { CssButton, CssInput, CssTable, CssTableContainer } from "./style";
import ModifiedButton from "../ModifiedButton";
import ChosenChair from "../ChosenChair";
import MovieTime from "../MovieTime";

const PriceTable = (props) => {
  const classes = useStyles();
  return (
      <CssTable className={classes.table} aria-label="simple table">
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Typography className={classes.price} variant="h2">
                0đ
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <MovieTime />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <ChosenChair />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Input name="Email" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <Input name="Phone" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" component="th" scope="row">
              <ModifiedButton name="ĐẶT VÉ" />
            </TableCell>
          </TableRow>
      </CssTable>
  );
};

export default PriceTable;
