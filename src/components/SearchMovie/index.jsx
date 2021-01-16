import React from "react";
import { Button, Container, Grid, Box } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";

const SearchMovie = (props) => {
  const styles = useStyle();

  return (
    <Container maxWidth="lg">
      <Box className={styles.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <Box className={styles.dropDown}>
              <DropDown label="Phim" />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown label="Rạp" className={styles.dropDown} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown label="Ngày xem" className={styles.dropDown} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown label="Suất chiếu" className={styles.dropDown} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Button
              variant="contained"
              color="secondary"
              classes={{ root: styles.button }}
            >
              MUA VÉ NGAY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchMovie;
