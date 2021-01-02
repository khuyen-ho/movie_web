import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detail: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },

  descWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  button: {
    outline: "none",
    color: theme.palette.white.main,
    padding: theme.spacing(0.5, 0),
    width: 150,

    "&:focus": {
      outline: "none",
    },
  },

  trailer: {
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

export default useStyles;
