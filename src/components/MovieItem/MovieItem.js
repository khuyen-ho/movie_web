import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
  withStyles,
  CardContent,Box
} from "@material-ui/core";
import style from "./styleMovie";
import{ connect} from 'react-redux'
class MovieItem extends Component {
  goToDetail = (id) => () => {
    this.props.history.push("/detail/" + id);
    //console.log(this.props.history);
  };

  
  render() {
    const { classes } = this.props;
   const{hinhAnh,tenPhim}=this.props.courseItem;
    //console.log(this.props.courseItem);
    // const { tenPhim, moTa, hinhAnh, maPhim } = this.props.item;
    return (
      <div>
       
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={hinhAnh}
              title="Contemplative Reptile"
            />
            <CardContent style={{padding:0}}>
              <Box fontSize={{xs:18, md: 20}} className={classes.name} gutterBottom variant="h5" component="h2">
                {tenPhim}
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button className={classes.btn} size="small" color="primary" fullWidth>
              Detail
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = (state)=>{
  return {
   // course:state.course,
   // pagination:state.pagination
  }
}

export default connect(mapStateToProps)( (withStyles(style)(MovieItem)));
