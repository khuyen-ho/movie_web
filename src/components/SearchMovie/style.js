import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,.3)",
    padding: theme.spacing(2.5, 2),
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 500,
      display: "flex",
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 700,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 950,
    },
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
