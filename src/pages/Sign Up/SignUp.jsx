import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleSignUp";
import { withStyles } from "@material-ui/core";
import Axios from "axios";
//import wrapper from '../../HOCs/Wrapper/Wrapper'

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <form className={classes.formSignUp} noValidate autoComplete="off">
          <Typography component="h3" variant="h3">
            Sign Up
          </Typography>
          <Box>
            <TextField
              className="input"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />

            <TextField
              className="input"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              className="input"
              id="outlined-basic"
              label="Fullname"
              variant="outlined"
            />

            <TextField
              className="input"
              id="outlined-password-input"
              label="Email"
              variant="outlined"
            />
          </Box>
          <Box>
          <TextField
              className="input"
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
          </Box>
          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
        </form>
      </>
    );
  }
  // componentDidMount(){
    
  //     Axios({
  //       url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10",
  //       method:'get'
  //     }).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
    
  // }
}
export default withStyles(style)(( SignUp));
