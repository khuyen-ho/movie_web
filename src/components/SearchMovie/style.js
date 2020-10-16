import { makeStyles } from "@material-ui/core/styles";

const userStyle = makeStyles((theme) => ({
  container: {
    height: 200,
    maxWidth: 940,
    margin: "auto",
    height: 80,
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: "0 0 10px rgba(0,0,0,.3)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default userStyle;
