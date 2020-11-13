import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,.3)",
  },

  button: {
    outline: "none",
    color: theme.palette.white,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    [theme.breakpoints.up("xs")]: {
      marginTop: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(0),
    },
  },
}));

export default useStyle;
