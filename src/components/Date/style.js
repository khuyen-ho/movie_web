import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(1, 0),
  },

  text: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    lineHeight: 1.5,
  },
}));

export default useStyles;
