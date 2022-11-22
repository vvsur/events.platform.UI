import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

export default function FilterCity(props) {
  const { language, city, moment, cities, moments } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleMenuItemClick(event, itemSysName) {
    props.handleUpdate(itemSysName);

    setAnchorEl(null);
  }

  return (
    <span>
      {cities &&
        cities.map((item) => {
          if (item.sysname === city)
            return (
              <span
                key={`city-${item.sysname}`}
                className="MuiButton-label text-gray-900 text-base no-underline hover:no-underline font-extrabold text-lg cursor-pointer"
                onClick={handleClick}
              >
                {item.name2}
              </span>
            );
        })}

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cities &&
          cities.map((item) => {
            if (item.sysname !== city)
              return (
                <StyledMenuItem
                  key={item.sysname}
                  onClick={(event) => handleMenuItemClick(event, item.sysname)}
                >
                  <ListItemText primary={item.name} />
                </StyledMenuItem>
              );
          })}
      </StyledMenu>
    </span>
  );
}
