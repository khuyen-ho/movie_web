import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  list: {
    background: theme.palette.white,
    padding: theme.spacing(0, 2),
    height: 700,
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderRight: "none",
    borderRadius: theme.shape.borderRadius,
  },

  smallPadding: {
    padding: theme.spacing(0, 1),
  },

  verticalScroll: {
    overflowY: "scroll",
  },

  noTopLeftRadius: {
    borderTopLeftRadius: 0,
  },

  noTopRightRadius: {
    borderTopRightRadius: 0,
  },

  noBottomLeftRadius: {
    borderBottomLeftRadius: 0,
  },

  noBottomRightRadius: {
    borderBottomRightRadius: 0,
  },

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
