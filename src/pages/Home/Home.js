import React, { Component } from "react";
import style from "./styleHome";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import MovieItem from "../../components/MovieItem/MovieItem";

import Pagination_ from "../../components/Pagination/Pagination";
import { getCourseList } from "../../redux/actions/courseAction";
import { connect } from "react-redux";
import CinemaComponent from "../../components/Cinema/CinemaComponent";

class Home extends Component {
  renderMovie = () => {
    const { classes } = this.props;
    return this.props.course.map((courseItem, index) => {
      return (
        <Grid className={classes.item} item xs={3} >
          <Box px={{lg:5,md:3,xs:1}}>
          <MovieItem key={index} courseItem={courseItem} /></Box>
        </Grid>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.home} textAlign="center">
        <Container className={classes.container}>
          <Typography
            className={classes.title1}
            component="h2"
            variant="h2"
            color="primary"
          >
            MOVIE
          </Typography>
          <Typography className={classes.title2} component="h4" variant="h4">
            New movies
          </Typography>
          <Grid container>
            {this.renderMovie()}
         
          </Grid>
          <Box mt={5}>
             <Pagination_/>
          </Box>
         
          {/* <Box my={5} mx={2}>
            <Typography className={classes.title2} component="h4" variant="h4">
              Cinema
            </Typography>
            <Grid className={classes.cinema} container>
              <Grid item xs={1}>
                <Cinema />
              </Grid>
              <Grid item xs={4}>
                <CinemaDetail />
              </Grid>
              <Grid item xs={7} className={classes.detail}>
               <Typography>Info</Typography>
              </Grid>
            </Grid>
          </Box> */}
          <CinemaComponent/>

         
        </Container>
      </Box>
    );
  }

  componentDidMount() {
    this.props.dispatch(getCourseList(this.props.pagination.currentPage,12));
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course,
    pagination: state.pagination,
  };
};
export default connect(mapStateToProps)(withStyles(style)(Home));
