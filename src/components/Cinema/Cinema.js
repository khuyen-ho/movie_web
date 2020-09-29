import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from './styleCinema'
import {withStyles} from '@material-ui/core'

class Cinema extends Component {
  render() {
      const {classes} = this.props
    return (

     <ButtonGroup
     orientation="vertical"
     color="secondary"
     aria-label="vertical outlined primary button group"
  variant='text'
  >
     <Button className={classes.cinemaItem}>
       <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" />
     </Button>
     <Button className={classes.cinemaItem}>
       <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" />
     </Button>
     <Button className={classes.cinemaItem}>
       <img src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" />
     </Button>
   </ButtonGroup>
    );
  }
}
export default withStyles(style)(Cinema)