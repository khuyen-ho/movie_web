import React from "react";
import PropTypes from "prop-types";
import { Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";

const Search = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <InputBase
        placeholder={props.placeholder}
        fullWidth
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
      />
      <IconButton className={styles.iconButton}>
        <SearchIcon className={styles.searchIcon} fontSize="large" />
      </IconButton>
    </Box>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: "Nhập tìm kiếm...",
};

export default Search;
