import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Button,
  withStyles,
  CardContent,
} from "@material-ui/core";
import style from "./styleMovie";


class MovieItem extends Component {
  goToDetail = (id) => () => {
    this.props.history.push("/detail/" + id);
    //console.log(this.props.history);
  };

  render() {
    const { classes } = this.props;
    // const { tenPhim, moTa, hinhAnh, maPhim } = this.props.item;
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang_gp01.jpg"
              title="Contemplative Reptile"
            />
            <CardContent style={{padding:0}}>
              <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                name
              </Typography>
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



export default (withStyles(style)(MovieItem));
