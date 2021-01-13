import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "none",
  },

  leftPanel: {
    position: "fixed",
    top: 0,
    left: 0,
    width: 260,
    height: "100vh",
    backgroundImage: `linear-gradient(to bottom right ,#181a67,#4c0144,${theme.palette.grey.dark})`,
    zIndex: 3,
  },

  list: {
    background: theme.palette.white,
    padding: theme.spacing(2, 1.5),
    width: "100%",
    height: "100%",
  },

  listItem: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  selected: {
    background: `${theme.palette.primary.main} !important`,
    borderRadius: theme.shape.borderRadius,
    boxShadow:
      "0 12px 20px -10px rgba(0, 172, 193,.28), 0 4px 20px 0 rgba(0, 0, 0,.12), 0 7px 8px -5px rgba(0, 172, 193,.2);",
    transition: "all 150ms linear",
  },

  noBackground: {
    "&:hover": {
      background: "none",
    },
  },

  divider: {
    height: 1,
    background: theme.palette.grey.main,
    margin: theme.spacing(1, 0),
  },

  info: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "calc(100% - 260px)",
    padding: theme.spacing(1, 3),
  },
}));

export default useStyles;
