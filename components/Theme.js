import React from 'react';
import {ThemeProvider} from '@material-ui/styles';

function Theme(props)
{
    return (
        // <ThemeProvider>
        <>
            {props.children}
            </>
        // </ThemeProvider>
    )
}

export default React.memo(Theme);
