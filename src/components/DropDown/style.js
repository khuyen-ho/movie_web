import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    width: "100%",
  },
  select: {
    width: "100%",
    borderBottom: "none",
    "&:focus": {
      background: "none",
    },
  },

  icon: {
    color: "red",
  },
}));

export default useStyles;
