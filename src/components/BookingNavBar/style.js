import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},

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
