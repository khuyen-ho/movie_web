import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 1),
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    background: theme.palette.white,
    minHeight: 700,

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default useStyles;
