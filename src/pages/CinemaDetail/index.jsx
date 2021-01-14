import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import ScheduleCinemaDetail from "../../components/ScheduleCinemaDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
const CinemaDetail = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCurrentWebPage(props.match.url))
  },[]);
  return (
    <Box className={styles.root}>
      <CinemaBannerDetail />
      <ScheduleCinemaDetail />
    </Box>
  );
};

export default wrapper(CinemaDetail);
