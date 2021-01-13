import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    boxShadow: theme.shadows[22],
    padding: 0,
    opacity: 0.95,
  },

  background: {
    background: theme.palette.white.main,
  },

  toolBar: {
    justifyContent: "flex-end",
  },
}));

export default useStyles;
