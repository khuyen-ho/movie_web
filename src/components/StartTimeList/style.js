import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default useStyles;
