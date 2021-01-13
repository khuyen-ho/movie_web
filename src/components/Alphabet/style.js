import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: "center",
  },

  letter: {
    fontSize: 15,
    fontWeight: 600,
  },
}));

export default useStyles;
