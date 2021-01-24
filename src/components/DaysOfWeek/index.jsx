import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import Date from "../Date";
import useStyles from "./style";
import { GET_SELECTED_DATE } from "../../redux/actions/actionType";

const DaysOfWeek = (props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.date.list);
  const selected = useSelector((state) => state.date.selected);

  const handleChange = (event, newValue) => {
    dispatch({ type: GET_SELECTED_DATE, payload: list[newValue] });
  };

  return (
    <Tabs
      value={list.indexOf(selected)}
      className={styles.tabs}
      variant="scrollable"
      scrollButtons="on"
      indicatorColor="secondary"
      textColor="secondary"
      onChange={handleChange}
    >
      {list.map((date, index) => (
        <Tab
          classes={{ root: styles.tabRoot, selected: styles.selected }}
          label={<Date date={date} />}
          key={index}
        />
      ))}
    </Tabs>
  );
};

DaysOfWeek.propTypes = {
  list: PropTypes.array,
};

DaysOfWeek.defaultProps = {
  list: [],
};

export default DaysOfWeek;
