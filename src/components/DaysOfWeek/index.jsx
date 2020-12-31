import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import Date from "../Date";
import { getDateList, getDay, getDate } from "../../helpers/time-manager";
import useStyles from "./style";

const DaysOfWeek = ({ startDate }) => {
  const styles = useStyles();
  const dateList = getDateList(startDate, 14);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      {dateList.map((date, index) => (
        <Tab
          classes={{ root: styles.tabRoot, selected: styles.selected }}
          label={<Date day={getDay(date)} date={getDate(date)} />}
          key={index}
        />
      ))}
    </Tabs>
  );
};

DaysOfWeek.propTypes = {
  startDate: PropTypes.string,
};

DaysOfWeek.defaultProps = {
  startDate: "2019-01-09T00:00:00",
};

export default DaysOfWeek;
