import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const defaultList = ["Choose item", "Item 1", "Item 2", "Item 3"];

const CreateList = (list = defaultList) => {
  return list.map((item, index) => (
    <MenuItem key={index} value={index}>
      {item}
    </MenuItem>
  ));
};

const DropDown = (props) => {
  const styles = useStyles();
  return (
    <FormControl className={styles.formControl}>
      <Select
        defaultValue={0}
        classes={{
          select: styles.select,
          icon: styles.icon,
        }}
      >
        {CreateList(props.list)}
      </Select>
    </FormControl>
  );
};

export default DropDown;
