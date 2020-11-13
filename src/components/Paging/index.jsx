import React from "react";
import useStyles from "./style";
import Pagination from "@material-ui/lab/Pagination";

const Paging = () => {
  const style = useStyles();
  return (
    <Pagination
      siblingCount={0}
      boundaryCount={1}
      count={10}
      defaultPage={1}
      shape="round"
      color="secondary"
      size="large"
      classes={{ root: style.root, ul: style.list }}
    />
  );
};

export default Paging;
