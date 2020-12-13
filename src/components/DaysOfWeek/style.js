import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    display: "flex",
    alignItems: "center",
    width: 699,
    height: 82,
    background: theme.palette.white,
    border: `1px solid ${theme.palette.grey.light}`,
    borderLeft: "none",
    borderTopRightRadius: theme.shape.borderRadius,
  },

  tabRoot: {
    color: theme.palette.grey.dark,
    minWidth: 0,
    "&:focus": {
      outline: "none",
    },
  },

  selected: {
    "& .MuiTab-wrapper p": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
