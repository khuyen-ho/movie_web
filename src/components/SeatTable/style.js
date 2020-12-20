import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    "& img": {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },

  chairNote: {
    paddingLeft:"40%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft:"30%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft:"10%",
    },
  },
}));

export default useStyles;
