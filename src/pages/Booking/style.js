import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  seatPlan: {
    marginTop: 75,
    padding: theme.spacing(2, 0),
  },

  priceInfo: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "26%",
    height: "100%",
    boxShadow: theme.shadows[22],
    zIndex: 3,
  },
}));

export default useStyles;
