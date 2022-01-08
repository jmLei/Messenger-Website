import React, { useState, useEffect, useRef } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";

import { makeStyles } from "@material-ui/core";

const drawerAppBarHeight = 70;
const drawerWidth = 360;

const useStyles = makeStyles({
    appBar: {
        height: drawerAppBarHeight,
    },

    drawer: {
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

    mainPanel: {
    
    }
});

const Main = () => {
    const messengerPanelRef = useRef();
    const spacingPanelRef = useRef();
    const textFieldRef = useRef();

    useEffect(() => {
        console.log("Messenger Panel = " + messengerPanelRef.current.clientHeight);
        console.log("Spacing Panel = " + spacingPanelRef.current.clientHeight);
        console.log("Textfield = " + spacingPanelRef.current.clientHeight);
    });
        
    const classes = useStyles();

    return(
        <Box sx={{display: "flex"}}>
            <Drawer
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
                anchor="left"
                open={true}
                variant="permanent"
            >
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
                        Toolbar 2
                    </Toolbar>
                </AppBar>
                <List
                    className={classes.chatList}
                >
                </List>
            </Drawer>

            <Box sx={{ flexGrow: 1}}>
                <Box sx={{display: "flex",  flexDirection: "column"}}>
                    <AppBar
                        position="static"
                    >
                        <Toolbar>
                            Toolbar 3
                        </Toolbar>
                    </AppBar>
                    <Box ref={messengerPanelRef}>
                        Message Panel
                    </Box>
                        
                    <Box ref={spacingPanelRef}>
                        Spacing
                    </Box>

                    <Box ref={textFieldRef}>
                        Textfield
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};
export default Main;
