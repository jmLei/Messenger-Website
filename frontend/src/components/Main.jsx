import React, { useState, useEffect, useRef } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import { makeStyles } from "@material-ui/core";

const Main = () => {
    // useState hooks
    const [ spacing, setSpacing ] = useState(0);
    const [ tempDrawerOpen, setTempDrawerOpen ] = useState(false);

    // useRef hooks
    const appBarRef = useRef();
    const messengerPanelRef = useRef();
    const textFieldRef = useRef();

    // makeStyles hook
    const drawerAppBarHeight = 70;
    const drawerWidth = 360;

    const useStyles = makeStyles({
        appBar: {
            height: drawerAppBarHeight,
        },

        permanentDrawer: {
            position: 'static',
            width: drawerWidth
        },

        drawerPaper: {
            width: drawerWidth
        },

        chatList: {
            height: `calc(100% - ${drawerAppBarHeight} - ${drawerAppBarHeight}px)`,
            width: '100%',
            overflow: 'auto'
        },

        spacingPanel: {
            height: `calc(100vh - ${spacing}px)`
        },

        temporaryDrawer: {
            position: "absolute",
            width: drawerWidth
        }
    });

    const classes = useStyles();

    // useEffect hooks

    useEffect(() => {
        textFieldOnChangeHandler();
    });

    // additional functions

    const textFieldOnChangeHandler = () => {
        setSpacing(
            appBarRef.current.scrollHeight +
            messengerPanelRef.current.scrollHeight +
            textFieldRef.current.scrollHeight
        );
    };

    
    const drawer = (
        <Container>
            <AppBar
                className={classes.appBar}
                position="static"
            >
                <Toolbar>
                    Toolbar 1
                </Toolbar>
            </AppBar>
            <AppBar
                className={classes.appBar}
                position="static"
            >
                <Toolbar>
                    <TextField 
                        fullWidth
                        label="Search"
                        size="small"
                        variant="filled"
                    />
                </Toolbar>
            </AppBar>
            <List
                className={classes.chatList}
            >
            </List>
        </Container>
    );

    return(
        <Box sx={{display: "flex"}}>
            <Button
                color="secondary"
                startIcon={<ArrowForwardIosIcon/>}
                sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    zIndex: 1
                }}
                onClick={() => setTempDrawerOpen(! tempDrawerOpen)}
            >
            </Button>
            <Drawer
                className={classes.temporaryDrawer}
                classes={{paper: classes.drawerPaper}}
                anchor="left"
                open={tempDrawerOpen}
                sx={{ 
                    display: { sx: "block", sm: "block", md: "block", lg: "none", xl: "none" } 
                }}
                variant="temporary"
            >
                <Button
                    color="secondary" 
                    endIcon={<CloseIcon />}
                    sx={{
                        position: "absolute",
                        right: 0,
                        zIndex: 1
                    }}
                    onClick={() => setTempDrawerOpen(! tempDrawerOpen)}
                >
                </Button>
                {drawer}
            </Drawer>
            <Drawer
                className={classes.permanentDrawer}
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
                open={true}
                sx={{
                    display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }
                }}
                variant="permanent"
            >
                {drawer}
            </Drawer>

            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Box sx={{display: "flex",  flexDirection: "column"}}>
                        <AppBar
                            position="static"
                            ref={appBarRef}
                        >
                            <Toolbar>
                                Toolbar 3
                            </Toolbar>
                        </AppBar>
                        <Box ref={messengerPanelRef}>
                            Message Panel
                        </Box>
                            
                        <Box className={classes.spacingPanel}>
                        
                        </Box>

                        <Box ref={textFieldRef} sx={{ position: "relative", width: "100%" }}>
                            <AppBar
                                position="static"
                                sx={{ 
                                    bottom: 0, 
                                    display: "flex",
                                    position: "absolute",
                                }}
                            >
                                <Toolbar>
                                    <TextField
                                        multiline
                                        maxRows={4}
                                        onChange={textFieldOnChangeHandler}
                                        margin="dense"
                                        size="small"
                                        sx={{ flexGrow: 1 }}
                                    />
                                    <Button
                                        endIcon={<SendIcon/>}
                                        sx={{
                                            alignSelf: "flex-end",
                                            top: "-10px"
                                        }}
                                        variant="contained"
                                    >
                                    </Button>
                                </Toolbar>
                            </AppBar>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
};
export default Main;
