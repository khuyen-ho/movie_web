import { Container } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey.dark,
    borderTop: "5px solid",
    borderColor: theme.palette.secondary.main,
    padding: "30px 0",
    color: theme.palette.white,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  social: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },
  media: {
    color: theme.palette.grey.light,
    marginRight: theme.spacing(1),
    "&:hover": {
      color: theme.palette.grey.main,
      transition: "all 0.3s",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  icon: {
    fontSize: 40,
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  cinema: {
    textAlign: "center",
  },
  logo: {
    height: 40,
    marginBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      height: 30,
    },
    [theme.breakpoints.down("xs")]: {},
  },
  movie: {
    textAlign: "center",
  },
  phone: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  list: {
    listStyle: "none",
    width: "auto",
    maxWidth: 344,
    padding: 0,
  },
  tagA: {
    fontWeight: "normal",
    fontSize: 15,
    textTransform: "inherit",
    color: "#b3c4d5",
    display: "block",
    color: theme.palette.grey.light,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      textDecoration: "none",
      transition: "all 0.3s",
    },
  },
  title: {
    padding: "8px 19px",
    fontWeight: "normal",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "left",
    color: "#fff",
    //backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: 10,
    display: "inline-block",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
}));
export const CssContainer = withStyles((theme) => ({
  root: {
    "&.MuiContainer-root": {
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },
  },
}))(Container);
export default useStyles;
