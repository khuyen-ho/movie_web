import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },

  list: {
    "& li": {
      margin: 0,
    },

    "& li button": {
      outline: "none",
      margin: 0,
    },
  },
}));

export default useStyles;
