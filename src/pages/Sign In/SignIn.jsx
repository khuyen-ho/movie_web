import React, { Component } from "react";
import style from "./styleSignIn";
import { TextField, withStyles, Box, Typography, Button } from "@material-ui/core";
import {connect} from 'react-redux'
import { signIn } from "../../redux/actions/userActions";


class SignIn extends Component {
constructor(props){
  super(props)
  this.state={
    taiKhoan:'',
    matKhau:'',
  }
}

handleChange=(e)=>{
  const name =e.target.name;
  const value = e.target.value;
  this.setState({
    [name]:value
  })
  //console.log(name,value);
}

handleSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state);
  this.props.dispatch(signIn(this.state))
}

  render() {
    const { classes } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={classes.formSignIn} noValidate autoComplete="off">
          <Typography component="h3" variant="h3">
            Sign In
          </Typography>
          <Box my={2}>
            <TextField
              id="outlined-basic"
              label="Username"
              name='taiKhoan'
              variant="outlined"
              onChange={this.handleChange}
            />
          </Box>
          <Box my={2}>
            <TextField
              id="outlined-password-input"
              label="Password"
              name='matKhau'
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={this.handleChange}
            />
          </Box>
          <Button type='submit'>Sign In</Button>
        </form>
      </>
    );
  }
}
export default connect()(withStyles(style)((SignIn)));
