import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import style from './styleCinema'
import {withStyles} from '@material-ui/core'
class CinemaMovie extends Component {
    render() {
      const {classes} = this.props
        return (
            <ButtonGroup
            orientation="vertical"
            color="secondary"
            aria-label="vertical outlined primary button group"
            variant="text"
            className={classes.cinemaDetail}
         >
            <Button className={classes.cinemaItem} fullWidth>
              <Grid container>
                <Grid item xs={4}>
                  <img style={{width:'100%'}} src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" />
                </Grid>
                <Grid item xs={8}>
                  <Typography className='title' component='h6' >Cinema</Typography>
                  <Typography className='detail' component='p'>Detail</Typography>
                  <Typography className='detail' component='p'>02/11/2020</Typography>
                </Grid>
              </Grid>
            </Button>
            <Button className={classes.cinemaItem} fullWidth>
              <Grid container>
                <Grid item xs={4}>
                  <img style={{width:'100%'}} src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" />
                </Grid>
                <Grid item xs={8}>
                  <Typography className='title' component='h6' >Cinema</Typography>
                  <Typography className='detail' component='p'>Detail</Typography>
                  <Typography className='detail' component='p'>02/11/2020</Typography>
                </Grid>
              </Grid>
            </Button>
          </ButtonGroup>
        )
    }
}
export default withStyles(style)(CinemaMovie)