import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';



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


// const items = [
//     { name: 'Любое время', name2: 'В любое время', sysName: 'all-times' },
//     { name: 'Сегодня', name2: 'Сегодня', sysName: 'today' },
//     { name: 'Завтра', name2: 'Завтра', sysName: 'tomorrow' },
//     { name: 'Выходные', name2: 'На выходных', sysName: 'this-weekend' },
//     { name: 'Эта неделя', name2: 'На этой неделе', sysName: 'this-week' },
//     { name: 'Следующая неделя', name2: 'На следующей недели', sysName: 'next-week' },
//     { name: 'Этот месяц', name2: 'В этом месяце', sysName: 'this-month' },
//     { name: 'Следуюший месяц', name2: 'В следуюшем месяцe', sysName: 'next-month' },
// ];

export default function FilterMoment(props) {

    const { language, city, moment, cities, moments } = props;

    //const [currentItem, setCurrentItem] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    //const classes = useStyles();


    function handleClick(event) {
        setAnchorEl(event.currentTarget);
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
        <>
            {
                moments && moments.map(item => {

                    if (item.sysName === moment)
                        return (
                            <span key={`moment-${item.sysName}`} className="MuiButton-label text-gray-900 text-base no-underline hover:no-underline font-extrabold text-lg cursor-pointer" onClick={handleClick}>
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
                    moments && moments.map(item => {

                        if (item.sysName !== moment)
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
        </>
    );
}

