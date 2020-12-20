import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    padding: theme.spacing(5, 0),
  },

  container: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  bigScreen: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  smallScreen: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default useStyles;
