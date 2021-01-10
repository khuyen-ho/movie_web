import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  screen: {
    width: "100%",
  },

  seatList: {
    maxWidth: 600,
    margin: "auto",
  },

  seatNote: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
