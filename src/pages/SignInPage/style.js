import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "url(./images/bg_login.jpg) no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    height: "100vh",
    "& a:hover": {
      textDecoration: "none",
    },

    [theme.breakpoints.down("md")]: {
      background: "rgba(8,22,48)",
    },
  },

  navBar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  center: {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 550,
      position: "absolute",
      top: "50%",
      left: "50%",
      margin: "auto",
      transform: "translate(-50%,-50%)",
    },
  },
}));

export default useStyles;
