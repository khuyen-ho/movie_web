import React, { Component } from "react";
import style from "./style";
import {
  Box,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import MovieItem from "../../components/MovieItem";
import Pagination_ from "../../components/Pagination/index";
import { getCourseList } from "../../redux/actions/movieAction";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel";
import SearchMovie from "../../components/SearchMovie";
import Film from "../../components/Film";

class Home extends Component {
  renderMovie = () => {
    const { classes } = this.props;
    return this.props.course.map((courseItem, index) => {
      return (
        <Grid className={classes.item} item xs={3}>
          <Box px={{ lg: 5, md: 3, xs: 1 }}>
            <MovieItem key={index} courseItem={courseItem} />
          </Box>
        </Grid>
      );
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.home} textAlign="center">
        <Carousel />
        <SearchMovie />
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
            Phim đang chiếu
          </Typography>
          <Grid container>{this.renderMovie()}</Grid>
          <Box mt={5}>
            <Pagination_ />
          </Box>
          <Box>
            <Film />
          </Box>
        </Container>
      </Box>
    );
  }

  componentDidMount() {
    this.props.dispatch(getCourseList(this.props.pagination.currentPage, 12));
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.course,
    pagination: state.pagination,
  };
};
export default connect(mapStateToProps)(withStyles(style)(Home));
