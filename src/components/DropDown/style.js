import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  select: {
    fontSize: theme.typography.subtitle1.fontSize,
    textAlign: "left",
    width: "100%",
    borderBottom: "none",
    "&:focus": {
      background: "none",
    },
  },
  icon: {
    color: theme.palette.secondary.main,
  },
  menuItem: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

export default useStyles;
