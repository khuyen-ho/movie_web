import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    width: "80%",
    margin:"auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& img": {
      width: "100%",
    },
  },

  note: {
    marginTop: theme.spacing(5),
  },
}));

export default useStyles;
