import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: theme.spacing(1.5, 0),
    opacity: 0.7,

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },

    "&:focus": {
      opacity: 1.0,
      outline: "none",
    },
  },

  logo: {
    width: 50,
    height: 50,
    marginRight: theme.spacing(1),
  },

  name: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

export default useStyles;
