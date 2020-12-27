import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    width: "100%",
  },

  info: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 0),

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
