import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },

  info: {
    width: "90%",
    color: theme.palette.grey.main,
    display: "inline",
    marginRight: theme.spacing(0.5),
  },
}));

export default useStyles;
