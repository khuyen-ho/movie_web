import React from "react";
import PropTypes from "prop-types";
import { Box, IconButton, Link } from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import useStyles from "./style";

const Tag = (props) => {
  const { title, iconElement, link } = props;
  const styles = useStyles(props);

  return (
    <Box className={styles.root}>
      <IconButton className={styles.icon}>
        {iconElement}
        <Link href={link} className={styles.link} variant="subtitle2">
          {!props.noTitle && title}
        </Link>
      </IconButton>
    </Box>
  );
};

Tag.propTypes = {
  title: PropTypes.string,
  iconElement: PropTypes.element,
  link: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  noTitle: PropTypes.bool,
};

Tag.defaultProps = {
  title: "No title",
  iconElement: <SentimentVeryDissatisfiedIcon />,
  link: "#",
  noTitle: false,
};

export default Tag;
