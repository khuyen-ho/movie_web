import {
  withStyles,
  makeStyles,
  TableCell,
  TableRow,
  IconButton,
  Button,
  TablePagination,
} from "@material-ui/core";

export const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

export const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export const CssIconButton = withStyles((theme) => ({
  root: {
    "&.MuiIconButton-root": {
      outline: "none",
      padding: 5,
    },
  },
}))(IconButton);
export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      outline:"none",
      padding:5,
      backgroundColor:"green",
      color:theme.palette.white.main
      
    },
  },
}))(Button);
export const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.grey.dark,
    backgroundImage: `linear-gradient(to bottom ,#181a67,#4c0144)`,
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
