import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import useStyles from "./style";

const DatePicker = ({ date, dispatchType, label, ...props }) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleChange = (newDate) => {
    dispatch({ type: dispatchType, payload: newDate });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        autoOk
        animateYearScrolling
        variant="inline"
        inputVariant="outlined"
        size="small"
        invalidDateMessage="Ngày không đúng định dạng"
        maxDateMessage="Ngày chọn không được sau ngày 01/01/2100"
        minDateMessage="Ngày chọn không được trước ngày 01/01/1900"
        format="dd/MM/yyyy"
        id="date"
        label={label}
        value={date}
        onChange={(date) => handleChange(date)}
        className={styles.datePicker}
      />
    </MuiPickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  date: PropTypes.object,
  dispatchType: PropTypes.string,
  label: PropTypes.string,
};

export default DatePicker;
