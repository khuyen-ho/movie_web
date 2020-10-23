import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 80,
    borderColor: "grey!important",
    textAlign: "right",
    "& .img": {
      width: 60,
      padding: 0,
    },
  },

  content: {
      display:'flex',
      justifyContent:'right'
  },

  container: {
    margin: "auto",
    [theme.breakpoints.down(`${theme.breakpoints.values.lg}`)]: {
      width: "100%",
    },
  },
}));

export default useStyles;
