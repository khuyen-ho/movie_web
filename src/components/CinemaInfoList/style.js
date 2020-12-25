import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderLeft: "none",
    background: theme.palette.white,
    minHeight: 700,

    "&:hover": {
      cursor: "pointer",
    },
  },

  item: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5, 0),
    borderBottom: `1.5px solid ${theme.palette.grey.light}`,
    background: "none!important",
    opacity: 0.5,

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },
  },

  selected: {
    opacity: 1.0,
  },
}));

export default useStyles;
