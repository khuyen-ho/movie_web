import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.white.main,
    left: 0,
    width: "75%",
    zIndex: 2,
  },

  toolBar: {
    height: 85,
    justifyContent: "space-between",
  },

  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 0),
  },
}));

export default useStyles;
