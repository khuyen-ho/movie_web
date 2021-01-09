import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    color: theme.palette.secondary.main,
  },

  desc: {
    color: theme.palette.white.main,
  },

  openingDay: {
    color: theme.palette.white.main,
  },
}));

export default useStyles;
