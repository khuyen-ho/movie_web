// const PriceTable = (props) => {
//   return <div>
//       PriceTable
//   </div>;
// };
// export default PriceTable;
import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import useStyles, { CssTable, CssTableContainer } from './style'

// const useStyles = makeStyles({
//   table: {
//     maxWidth: 650,
//   },
// });

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PriceTable() {
  const classes = useStyles();

  return (
    <CssTableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>0đ</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>Title</Typography>
                <Typography component='h4'>Cinema</Typography>
                <Typography component='h4'>Time</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>Ghế</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>Email</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>Phone</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Typography component='h4'>Phone</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                <Button fullWidth>ĐẶT VÉ</Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </CssTableContainer>
  );
}
