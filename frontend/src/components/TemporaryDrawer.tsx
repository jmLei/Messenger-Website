import { useState } from 'react';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

import DrawerContents from './DrawerContents';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

const TemporaryDrawer = () => {
    // states
    const [ open, setOpen ] = useState(true);

    return(
        <div>
            <Button
                color='secondary'
                startIcon={<ArrowForwardIosIcon />}
                onClick={() => setOpen(true)}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: 1
                }}
            >
            </Button>
            <Drawer
                anchor='left'
                open={open}
                sx={{
                    display: {
                        sx: 'block',
                        sm: 'block',
                        md: 'block',
                        lg: 'none',
                        xl: 'none'
                    },
                    marginTop: 50
                }}
                variant='temporary'
            >
                <Button
                    color='secondary'
                    endIcon={<CloseIcon />}
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        zIndex: 1
                    }}
                >
                </Button>
                <DrawerContents />
            </Drawer>
        </div>
    );

};
export default TemporaryDrawer;
