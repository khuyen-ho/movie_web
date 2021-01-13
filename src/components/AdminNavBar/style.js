import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    position: "relative",
  },

  toolBar: {
    justifyContent: "flex-end",
    padding: theme.spacing(0.5),
  },
}));

export default useStyles;
