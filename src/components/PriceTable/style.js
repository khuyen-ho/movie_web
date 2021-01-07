import { makeStyles, Table, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  price: {
    color: theme.palette.green.main,
  },
}));

export const CssTable = withStyles((theme) => ({
  root: {
    "&.MuiTable-root": {
      height: "100vh",
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
      [theme.breakpoints.down("sm")]: {
        borderLeft: "none",
      },
    },

    "& .MuiTableCell-root": {
      borderBottom: "1px dashed rgba(224, 224, 224, 1)",
      borderLeft: "none",
    },
  },
}))(Table);

export default useStyles;
