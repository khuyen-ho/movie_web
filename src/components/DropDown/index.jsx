import { FormControl, MenuItem, Select } from "@material-ui/core";
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

DropDown.defaultProps = {
  list: ["Choose item", "Item 1", "Item 2", "Item 3"],
};

export default DropDown;