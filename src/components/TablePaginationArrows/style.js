import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },

  button: {
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyles;
