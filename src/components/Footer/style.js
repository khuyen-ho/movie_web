import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey.dark,
    borderTop: "5px solid",
    borderColor: theme.palette.secondary.main,
    padding: "30px 0",
    color: theme.palette.white,
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
  },
  cinema: {
    textAlign: "center",
  },
  logo: {
    height: 40,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      height: 35,
    },
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
    fontSize: 20,
    textTransform: "inherit",
    color: "#b3c4d5",
    display: "block",
    color: theme.palette.grey.light,
    [theme.breakpoints.down("md")]: {
      fontSize: 17,
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

export default useStyles;
