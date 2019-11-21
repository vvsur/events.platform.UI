import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

import * as Actions from './store/actions/index'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
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
    // root: {
    //     '&:focus': {
    //         backgroundColor: theme.palette.primary.main,
    //         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //             color: theme.palette.common.white,
    //         },
    //     },
    // },
}))(MenuItem);


export default function FilterAnother(props) {

    const { language, city, moment, cities, moments } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }


    function handleClose() {
        setAnchorEl(null);
    }

    function handleMenuItemClick(event, itemSysName) {
        props.handleUpdate(itemSysName);

        setAnchorEl(null);
    }

    // const citiesList = Actions.static_GetCitiesList();

    // const momentsList = Actions.static_GetMomentsList();

    function handleClickListItem(event) {
        //setAnchorEl(event.currentTarget);
    }

    if (!cities && !city) return null;

    return (
        <span>


            {
                // eslint-disable-next-line array-callback-return
                cities.map(item => {

                    if (item.sysName === city)
                        return (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a key={item.sysName} className="MuiButton-label text-gray-900 text-base no-underline hover:no-underline font-extrabold text-lg cursor-pointer" onClick={handleClick}>
                                {/* to={`/ru/events/${props.currentCitySysName}/${props.currentMomentSysName}`} */}
                                {(language === 'ru') ? "Еще мероприятия в " : "More events in "} {item.name2}
                            </a>
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
                    // eslint-disable-next-line array-callback-return
                    moments.map(item => {

                        // if (item.sysName !== city)
                            return (
                                <StyledMenuItem
                                    key={item.sysName}
                                    onClick={event => handleMenuItemClick(event, item.sysName)}
                                >
                                    <ListItemText primary={item.name2.toLowerCase()} />
                                </StyledMenuItem>
                            )

                    })

                }

            </StyledMenu>
        </span>
    );
}

