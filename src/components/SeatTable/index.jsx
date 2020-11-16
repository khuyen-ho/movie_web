import { Box, Grid } from '@material-ui/core'
import React from 'react'
import WeekendIcon from '@material-ui/icons/Weekend';

const SeatTable = (props) => {
  
        return (
            <Box textAlign='center'>
            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <div>Cinema</div>
                        <div>User</div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <img src='./imgs/screen.png' alt=""/>
                </Grid>

                <Grid item xs={12}>
                  <WeekendIcon/>
                  <WeekendIcon/>
                  <WeekendIcon/>
                  <WeekendIcon/>
                  <WeekendIcon/>
                  <WeekendIcon/>
                  <WeekendIcon/>
                </Grid>
            </Grid></Box>
        )
    
}
export default SeatTable