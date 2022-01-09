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

const Main = () => {
    // useState hooks
    const [ render, setRender ] = useState(0);
    const [ spacing, setSpacing ] = useState(0);

    // useRef hooks
    const appBarRef = useRef();
    const messengerPanelRef = useRef();
    const spacingPanelRef = useRef();
    const textFieldRef = useRef();

    
    // makeStyles hook
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
            flexGrow: 1,
        },

        spacingPanel: {
            height: `calc(100vh - ${spacing}px)`
        }
    });

    const classes = useStyles();

    // useEffect hooks
    useEffect(() => {
        textFieldOnChangeHandler();
    });

    useEffect(() => {
        console.log("useEffect()");
        console.log("Spacing variable = " + spacing);
    }, [spacing])
    
    // additional functions

    const textFieldOnChangeHandler = () => {
        console.log(appBarRef.current.scrollHeight);
        console.log(messengerPanelRef.current.scrollHeight);
        console.log(textFieldRef.current.scrollHeight);
        setSpacing(
            appBarRef.current.scrollHeight +
            messengerPanelRef.current.scrollHeight +
            textFieldRef.current.scrollHeight
        );
    };

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

            <Box className={classes.mainPanel}>
                <Box sx={{display: "flex",  flexDirection: "column"}}>
                    <AppBar position="static" ref={appBarRef}>
                        <Toolbar>
                            Toolbar 3
                        </Toolbar>
                    </AppBar>
                    <Box ref={messengerPanelRef}>
                        Message Panel
                    </Box>
                        
                    <Box className={classes.spacingPanel} ref={spacingPanelRef}>
                    
                    </Box>

                    <Box ref={textFieldRef} sx={{ position: "relative" }}>
                        <TextField
                            multiline
                            maxRows={4}
                            onChange={textFieldOnChangeHandler}
                            margin="dense"
                            size="small"
                            sx={{ position: "absolute", bottom: 0 }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};
export default Main;
