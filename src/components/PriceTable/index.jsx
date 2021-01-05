import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";
import Input from "../Input";
import useStyles, { CssTable } from "./style";
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
      {/* <TableRow>
        <TableCell align="center" component="th" scope="row">
          <Input name="Email" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center" component="th" scope="row">
          <Input name="Phone" />
        </TableCell>
      </TableRow> */}
      <TableRow>
        <TableCell align="center" component="th" scope="row">
          <ModifiedButton name="ĐẶT VÉ" />
        </TableCell>
      </TableRow>
    </CssTable>
  );
};

export default PriceTable;
