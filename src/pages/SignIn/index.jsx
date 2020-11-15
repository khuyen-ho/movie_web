import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Checkbox, Container, Grid } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStyles, { CssButton, CssFormControlLabel, CssTextField } from "./style";
import MovieIcon from "@material-ui/icons/Movie";
import Navbar from "../../components/Navbar";
import NavbarBottom from "../../components/NavbarBottom";
// const Switches = () => {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
// };

// const useStyles = makeStyles((theme) => ({

// }));

const SignIn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.content}>
            <form className={classes.root_form} noValidate autoComplete="off">
              <div className={classes.form_content}>
                <MovieIcon fontSize="large" color="secondary" />
                <CssTextField
                  className={classes.margin}
                  label="Username"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  className={classes.margin}
                  label="Password"
                  variant="outlined"
                  type="password"
                  id="custom-css-outlined-input"
                />
                <CssButton variant="contained" color="secondary" fullWidth>
                  LOG IN
                </CssButton>
                <div>
                  <CssFormControlLabel
                    control={
                      <Switch
                        //checked={state.checkedB}
                        //onChange={handleChange}
                        name="checkedB"
                        color="secondary"
                      />
                    }
                    label="Keep logged in"
                  />
                  <CssFormControlLabel
                    control={
                      <Checkbox
                        //    checked={state.checkedA}
                        //   onChange={handleChange}
                        name="checkedA"
                      />
                    }
                    label="Forgot password?"
                  />
                </div>
                <Box display='flex' justifyContent='space-between' width='100%'>
                  <Button color="secondary">CREATE ACCOUNT</Button>
                  <Button color="secondary">NEED HELP?</Button>
                </Box>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.navBottom}>
            <NavbarBottom />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
