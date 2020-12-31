import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "all 10s linear",
  },
}));

export default useStyles;
