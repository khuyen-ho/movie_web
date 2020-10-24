import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  dayBtn: {
    height: 60,
    width: 100,
    borderColor: "grey!important",
    textAlign: "center",
    "& .img": {
      width: 60,
      padding: 0,
    },
  },

  container: {
    margin: "auto",
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      width: "100%",
    },
  },
}));

export default useStyles;
