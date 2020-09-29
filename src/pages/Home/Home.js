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
import Cinema from "../../components/Cinema/Cinema";
import CinemaDetail from "../../components/Cinema/CinemaDetail";

class Home extends Component {
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
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
            <Grid className={classes.item} item xs={3}>
              <MovieItem />
            </Grid>
          </Grid>
 
          <Box my={5} mx={2}>
           <Typography className={classes.title2} component="h4" variant="h4">
              Cinema
            </Typography>
            <Grid className={classes.cinema} container>
              <Grid item xs={1}>
                <Cinema />
              </Grid>
              <Grid item xs={3}>
                <CinemaDetail />
              </Grid>
              <Grid item xs={8} className={classes.detail}>
                Information
              </Grid>
            </Grid>
          </Box>

          {/* Pagination  */}
          <Box>
            <ButtonGroup
              variant="contained"
              color="secondary"
              aria-label="contained primary button group"
              style={{ margin: 50 }}
            >
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </ButtonGroup>
          </Box>
        </Container>
      </Box>
    );
  }
}
export default withStyles(style)(Home);
