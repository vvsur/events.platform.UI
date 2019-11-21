import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as Actions from './store/actions/index'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


const StyledMenuItem = withStyles(theme => ({

}))(MenuItem);


// const items = Actions.static_GetCitiesList();

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
        //setCurrentItem(itemSysName);
        setAnchorEl(null);
    }


    function handleClickListItem(event) {
        //setAnchorEl(event.currentTarget);
    }

    return (
        <span>

            {
                cities && cities.map(item => {

                    if (item.sysName === city)
                        return (
                            <span key={`city-${item.sysName}`} className="MuiButton-label text-gray-900 text-base no-underline hover:no-underline font-extrabold text-lg cursor-pointer" onClick={handleClick}>
                                {item.name2}

                            </span>
                        )

                })

            }
            {/* </Button> */}


            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClickListItem}
            >
                {
                    cities && cities.map(item => {

                        if (item.sysName !== city)
                            return (
                                <StyledMenuItem
                                    key={item.sysName}
                                    onClick={event => handleMenuItemClick(event, item.sysName)}
                                >
                                    <ListItemText primary={item.name} />
                                </StyledMenuItem>
                            )
                    })

                }

            </StyledMenu>
        </span>
    );
}

