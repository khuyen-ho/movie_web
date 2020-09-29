import { Box, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import style from './stylePrice'
import {withStyles} from '@material-ui/core'
class Price extends Component {
    render() {
        const {classes} = this.props
        return (
            <Grid container>
                <Grid item xs={12}>
                   <Typography className={classes.price} component='h4' variant='h4'>Price: 0đ</Typography>
                </Grid>
                <Grid item xs={12}>
                <Box className={classes.movie}>
                    <img src='http://movie0706.cybersoft.edu.vn/hinhanh/natra-two_gp01.png'/>
                    <Typography component='h4' variant='h4'>Movie</Typography>
                </Box>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(style)(Price)