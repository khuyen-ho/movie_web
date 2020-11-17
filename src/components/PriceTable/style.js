import {
  Button,
  Input,
  makeStyles,
  Table,
  TableContainer,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  price: {
    color: theme.palette.green.main,
  },
  detail: {
    textAlign: "left",
    paddingLeft: theme.spacing(3),
  },
  chosenChair: {
    textAlign: "left",
    paddingLeft: theme.spacing(3),
  },
  email: {
    paddingLeft: theme.spacing(3),
  },
  phone: { paddingLeft: theme.spacing(3) },
}));

export const CssTableContainer = withStyles({
  root: {
    "&.MuiTableContainer-root": {
      //width:"25%",
      height: "100vh",
    },
  },
})(TableContainer);

export const CssInput = withStyles({
  root: {
    "&.MuiInput-underline::before": {
      borderBottom: "none",
    },
  },
})(Input);

export const CssButton = withStyles((theme) => ({
  root: {
    "&.MuiButtonBase-root": {
      background: theme.palette.secondary.main,
      color:theme.palette.white,
      height:60
    },
  },
}))(Button);

export default useStyles;
