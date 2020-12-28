import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0),
    borderBottom: `1px solid ${theme.palette.grey.light}`,
  },

  selected: {
    opacity: 1.0,
    background: "none",
  },

  fade: {
    opacity: 0.5,
    background: "none!important",
    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },
  },
}));

export default useStyles;
