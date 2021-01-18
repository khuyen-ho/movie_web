import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "./style";

const DropDown = ({
  list,
  label,
  state,
  dispatchType,
  placeHolder,
  ...props
}) => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleChange = (event) => {
    dispatch({
      type: dispatchType,
      payload: event.target.value,
    });
  };

  const CreateList = (list) => {
    return list.map((item, index) => (
      <MenuItem
        dense
        key={index}
        value={item}
        classes={{ root: styles.menuItem }}
      >
        {item}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" size="small" className={styles.formControl}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        defaultValue={""}
        value={state}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
        label={label}
        onChange={handleChange}
      >
        {placeHolder && !list.length && (
          <MenuItem value="" classes={{ root: styles.menuItem }}>
            <em>{placeHolder}</em>
          </MenuItem>
        )}
        {CreateList(list)}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
  dispatchType: PropTypes.string,
  placeHolder: PropTypes.string,
};

DropDown.defaultProps = {
  list: ["Item1", "Item2", "Item3"],
  label: "Label",
  dispatchType: "",
  placeHolder: "Vui lòng chọn",
};

export default DropDown;
