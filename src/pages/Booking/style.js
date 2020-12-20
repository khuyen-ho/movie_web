import { Container, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerBooking: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export const CssContainer = withStyles({
  root: {
    "&.MuiContainer-root": {
      maxWidth: 1500,
    },
  },
})(Container);

export default useStyles;
