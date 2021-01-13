import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "./style";

const DropDown = (props) => {
  const styles = useStyles();

  const CreateList = (list) => {
    return list.map((item, index) => (
      <MenuItem
        dense
        key={index}
        value={index}
        classes={{ root: styles.menuItem }}
      >
        {item}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" className={styles.formControl}>
      <InputLabel id="select-label">{props.label}</InputLabel>
      <Select
        defaultValue={0}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
        label={props.label}
      >
        {CreateList(props.list)}
      </Select>
    </FormControl>
  );
};

DropDown.propTypes = {
  list: PropTypes.array,
  label: PropTypes.string,
};

DropDown.defaultProps = {
  list: ["Choose item", "Item 1", "Item 2", "Item 3"],
  label: "Label",
};

export default DropDown;
