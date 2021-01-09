import {
  withStyles,
  makeStyles,
  TableCell,
  TableRow,
  IconButton,
  Button,
  TablePagination,
} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.white.main,
    borderRadius: 7,
  },

  title: {
    color: theme.palette.secondary.main,
    margin: theme.spacing(1.5, 0),
    textAlign: "left",

    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("xsm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  info: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    margin: theme.spacing(1.5, 0),

    "& .MuiInputLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.shape.borderRadius,

      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },

  button: {
    color: theme.palette.white,
    margin: theme.spacing(1.5, 0),
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    "&:focus": {
      outline: "none",
    },

    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: 150,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButton-root": {
      outline: "none",
      padding: 5,
      backgroundColor: theme.palette.green.main,
      color: theme.palette.white.main,
    },
  },
}))(Button);
