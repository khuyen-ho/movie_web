import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 150,
  },
  select: {
    maxWidth: 150,
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
