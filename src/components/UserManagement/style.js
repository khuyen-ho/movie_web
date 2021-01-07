import {
  withStyles,
  makeStyles,
  TableCell,
  TableRow,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline:"none",
      padding:5,
      
    },
  },
}))(IconButton);
export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.grey.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
export default useStyles;
