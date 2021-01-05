import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "url(./images/bg_login.jpg) no-repeat center",
    backgroundSize: "cover",
    position: "relative",
    minHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      background: "linear-gradient(to bottom,rgba(8,22,48),rgba(20,50,93))",
      height: "100%",
    },
  },

  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "auto",
    transform: "translate(-50%,-50%)",
  },
}));

export default useStyles;
