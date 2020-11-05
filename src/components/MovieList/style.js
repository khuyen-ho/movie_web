import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    textAlign: "left",
    margin: theme.spacing(3, 0),

    [theme.breakpoints.up("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.up("xsm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },

  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

export default useStyles;
