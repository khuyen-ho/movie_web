import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100%",
    maxWidth: 940,
    margin: "auto",
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  button: {
    outline: "none",
    color: theme.palette.white,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.subtitle2.fontWeight,
    "&:focus": {
      outline: "none",
    },
  },
}));

export default useStyle;
