import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Checkbox, Container, Grid, Typography } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import useStyles, { ButtonWithoutOutline, CssButton, CssFormControlLabel, CssTextField } from "./style";
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
                {/* <MovieIcon fontSize="large" color="secondary" /> */}
                <Typography className={classes.title} variant='h6' color='secondary'>ĐĂNG NHẬP</Typography>
                <CssTextField
                  className={classes.margin}
                  label="Tên tài khoản"
                  variant="outlined"
                  id="custom-css-outlined-input"
                />
                <CssTextField
                  className={classes.margin}
                  label="Mật khẩu"
                  variant="outlined"
                  type="password"
                  id="custom-css-outlined-input"
                />
                <CssButton variant="contained" color="secondary" fullWidth>
                  ĐĂNG NHẬP
                </CssButton>
                <Box marginTop="30px">
                  <CssFormControlLabel
                    control={
                      // <Switch
                      //   //checked={state.checkedB}
                      //   //onChange={handleChange}
                      //   name="checkedB"
                      //   color="secondary"
                      // />
                      <Checkbox
                      //    checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
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
                    label="Quên mật khẩu?"
                  />
                </Box>
             
                {/* <Box display='flex' justifyContent='space-between' width='100%' >
                  <ButtonWithoutOutline color="secondary">Tạo tài khoản</ButtonWithoutOutline>
                  <ButtonWithoutOutline color="secondary">Cần giúp đỡ?</ButtonWithoutOutline>
                </Box> */}
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.navBottom}>
            {/* <NavbarBottom /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
