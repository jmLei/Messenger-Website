import React, { FC } from 'react';

import DrawerContents from './DrawerContents';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


// Display the contents of the drawer.

const PermanentDrawer = () => {
    return(
        <Drawer
            anchor='left'
            open={true}
            sx={{
                display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'block',
                    xl: 'block'
                }
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
