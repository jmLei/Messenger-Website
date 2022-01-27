import React, { FC } from 'react';

import DrawerContents from './DrawerContents';
import useStyles from './Styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


// Display the contents of the drawer.

const PermanentDrawer = () => {
    const classes = useStyles();

    return(
        <Drawer
            anchor='left'
            className={ classes.permanentDrawer }
            classes = {{ papar: classes.drawerPaper }}
            open={ true }
            sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'block',
                    xl: 'block'
                },
            }}
            variant='permanent'
        >
            <Box>
                <DrawerContents />
            </Box>
        </Drawer>
    );
};

export default PermanentDrawer;

/*

<Drawer
                className={classes.permanentDrawer}
                classes={{paper: classes.drawerPaper}}
                anchor="left"
                open={true}
                sx={{ 
                    display: { 
                        xs: "none", 
                        sm: "none", 
                        md: "none", 
                        lg: "block", 
                        xl: "block" 
                    } 
                }}
                variant="permanent"
            >
                {drawer}
            </Drawer>

*/
