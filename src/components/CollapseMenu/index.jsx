import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IconButton, MenuList, MenuItem, Drawer } from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import { useState } from "react";
import useStyles from "./style";

const CollapseMenu = ({ links }) => {
  const [state, setState] = useState({ right: false });
  const styles = useStyles();

  const createMenu = (anchor) => {
    return (
      <div
        className={styles.list}
        role="presentation"
        onClick={toggle(anchor, false)}
        onKeyDown={toggle(anchor, false)}
      >
        <MenuList>
          {links.map(({ title, path, target }) => (
            <MenuItem
              component={Link}
              key={title}
              to={path}
              target={target}
              className={styles.linkText}
            >
              {title}
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
  };

  const toggle = (anchor, open) => () => {
    setState({ [anchor]: open });
  };

  return (
    <>
      <IconButton
        edge="end"
        aria-label="menu"
        style={{ outline: "none" }}
        onClick={toggle("right", true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggle("right", true)}
        onClose={toggle("right", false)}
      >
        {createMenu("right")}
      </Drawer>
    </>
  );
};

CollapseMenu.propTypes = {
  links: PropTypes.array,
};

CollapseMenu.defaultProps = {
  links: [
    { title: "Menu1", path: "#", target: "_self" },
    { title: "Menu2", path: "#", target: "_self" },
    { title: "Menu3", path: "#", target: "_self" },
    { title: "Menu4", path: "#", target: "_self" },
  ],
};

export default CollapseMenu;
