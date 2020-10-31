import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    textAlign: "left",
    margin: theme.spacing(3, 0),
  },

  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: theme.spacing(0),
    maxWidth: 950,
  },
}));

export default useStyles;
