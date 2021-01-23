import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import Date from "../Date";
import {
  // getDateList,
  getDay,
  // getDate,
  getFullDate,
} from "../../helpers/time-manager";
import useStyles from "./style";
// import { setCurrentTime } from "../../redux/actions/cinemaAction";
// import { useDispatch } from "react-redux";

const DaysOfWeek = ({ list }) => {
  const styles = useStyles();
  // const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // dispatch(setCurrentTime(dateList[newValue].format()));
  };

  return (
    <Tabs
      value={value}
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
