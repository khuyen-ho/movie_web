import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    background: "none!important",
    padding: theme.spacing(1.5, 0),
    opacity: 0.5,

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },
  },

  selected: {
    opacity: 1.0,
  },

  icon: {
    minWidth: 0,
  },

  logo: {
    width: 50,
    height: 50,
  },
}));

export default useStyles;
