import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    width: "100%",
  },

  desc: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),

    "&:hover": {
      cursor: "pointer",
    },
  },

  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  openIcon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

export default useStyles;
