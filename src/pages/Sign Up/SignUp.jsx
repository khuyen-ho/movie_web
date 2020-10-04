import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
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
        {/* <form className={classes.formSignUp} noValidate autoComplete="off">
          <Typography component="h3" variant="h3">
            Sign Up
          </Typography>
          <Box mx={40}>
          <Grid container>
            <Grid item xs={6}>
                <div className={classes.box}>
              <TextField
                className="input"
                id="outlined-basic"
                label="Username"
                //variant="outlined"
              /></div>
            </Grid>
            <Grid item xs={6}><div className={classes.box}>
              <TextField
                className="input"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                //variant="outlined"
              /></div>
            </Grid>
            <Grid item xs={6}><div className={classes.box}>
              <TextField
                className="input"
                id="outlined-basic"
                label="Fullname"
                //variant="outlined"
              /></div>
            </Grid>
            <Grid item xs={6}><div className={classes.box}>
              <TextField
                className="input"
                id="outlined-password-input"
                label="Email"
                //variant="outlined"
              /></div>
            </Grid>
            <Grid item xs={6}><div className={classes.box}>
              <TextField
                className="input"
                id="outlined-basic"
                label="Phone"
               // variant="outlined"
              /></div>
            </Grid>
            <Grid item xs={6}><div className={classes.box}>
              <select className={classes.radio}>
                <option>KhachHang</option>
                <option>QuanTri</option>
              </select></div>
            </Grid>
          </Grid>
          </Box>
          <Button variant="outlined" color="secondary">
            Sign Up
          </Button>
        </form> */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box}\n\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for all buttons */\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity:1;\n}\n\n/* Extra styles for the cancel button */\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n.container {\n  padding: 16px;\n}\n\n/* Clear floats */\n.clearfix::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n     width: 100%;\n  }\n}\n',
          }}
        />

        <form action="/action_page.php" style={{ border: "1px solid #ccc" }}>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Password" name="psw" required />

            <label htmlFor="fullname">
              <b>Full Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="fullname"
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <input
              type="text"
              placeholder="Enter Phone"
              name="phone"
              required
            />
            {/* <label htmlFor="func">
              <b>Function</b>
            </label> */}
            <select>
              <option>User</option>
              <option>Admin</option>
            </select>

            <div className="clearfix">
              <button type="button" className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </div>
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
export default withStyles(style)(SignUp);
