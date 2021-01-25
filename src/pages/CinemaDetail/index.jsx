import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import ScheduleCinemaDetail from "../../components/ScheduleCinemaDetail";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import BackToTop from "../../components/BackToTop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { getCinemaInfo } from "../../redux/actions/cinemaAction";

const CinemaDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url));
  }, [dispatch, props.match.url]);

  useEffect(() => {
    dispatch(getCinemaInfo(id, ""));
  }, [dispatch, id]);

  return (
    <Box className={styles.root}>
      {/* <CinemaBannerDetail /> */}
      <ScheduleCinemaDetail />
      <BackToTop showBelow={300} />
    </Box>
  );
};

export default wrapper(CinemaDetail);
