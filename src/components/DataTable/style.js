import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1.0px solid ${theme.palette.grey.dark}`,
    borderRadius: theme.shape.borderRadius,
    maxHeight: (props) => props.maxHeight,
    maxWidth: (props) => props.maxWidth,
  },

  darkCell: {
    background: theme.palette.grey.dark,
    color: theme.palette.white.main,
    fontWeight: 500,
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  footer: {
    borderBottom: "none",
  },

  cell: {
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default useStyles;
