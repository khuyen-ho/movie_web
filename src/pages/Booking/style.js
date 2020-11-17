import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    headerBooking: {
    [theme.breakpoints.down("sm")]: {
       display:"none"
      },
  },
}));

export default useStyles;
