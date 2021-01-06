import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  name: {
    color: theme.palette.secondary.main,

    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },

  address: {
    color: theme.palette.white.main,

    [theme.breakpoints.down("md")]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

export default useStyles;
