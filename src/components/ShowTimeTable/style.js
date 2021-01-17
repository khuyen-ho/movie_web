import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dropDown: {
    margin: theme.spacing(1, 0),
    width: "100%",
  },

  iconButton: {
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },

  table: {
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
