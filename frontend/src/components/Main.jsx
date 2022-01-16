import React, { useState, useEffect, useRef } from "react";

import ChatTab from "./ChatTab";
import GoogleLoginComponent from "./GoogleLoginComponent";
import Message from "./Message";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import { makeStyles } from "@material-ui/core";
import io from "socket.io-client";
import axios from "axios";

const socket = io('http://localhost:8080');

const Main = () => {
    // useState hooks
    const [ message, setMessage ] = useState("");
    const [ spacing, setSpacing ] = useState(0);
    const [ tempDrawerOpen, setTempDrawerOpen ] = useState(false);

    const [userid, setUserid] = useState("");
    const [chatroomID, setChatroomID] = useState("");
    const [chatrooms, setChatrooms] = useState([]);

    // Socket

    socket.on('message', (message) => {
       
    });

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
        setSpacing(
            appBarRef.current.scrollHeight +
            messengerPanelRef.current.scrollHeight +
            textFieldRef.current.scrollHeight
        )
    });

    // additional functions

    const messageFieldChange = (event) => {
        setSpacing(
            appBarRef.current.scrollHeight +
            messengerPanelRef.current.scrollHeight +
            textFieldRef.current.scrollHeight
        );
        setMessage(event.target.value);

        if(userid != "") {
            axios.get(`http://localhost:8080/user/chatrooms/${userid}`)
                .then((res) => setChatrooms(res.data))
                .catch((error) => console.log(error));
        }
    };

    const messageFieldKeyPress = (event) => {
        if(event.key === "Enter" && ! event.shiftKey) {
            if(document.getElementById("messageField").value.length < 1) {
                event.preventDefault();
            } else {
                sendMessageButtonClick();
            }
        }   
    };

    const sendMessageButtonClick = () => {
        if(message.length > 0) {
            socket.emit("message", message);
            document.getElementById("messageField").value = "";
        }
    };
    
    const drawer = (
        <Container>
            <AppBar
                className={classes.appBar}
                position="static"
            >
                <Toolbar>
                    <Grid
                        container columnSpacing={{ 
                            xs: 6, sm: 6, md: 6, lg: 6, xl: 6
                        }} 
                        sx={{ alignItems: "center" }}
                    >
                        <Grid item>
                            <Typography variant="h6">
                                Messenger
                            </Typography>
                        </Grid>
                        <Grid item>
                            <GoogleLoginComponent setUserid={setUserid} />
                        </Grid>
                    </Grid>
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
                {
                    chatrooms.map((chatroom) => {
                        console.log(chatroom);
                        return <ChatTab key={chatroomID} chatroom={chatroom} />
                    })
                }
            </List>
        </Container>
    );

    return(
        <Box sx={{display: "flex"}}>
            <Button
                color="secondary"
                startIcon={<ArrowForwardIosIcon/>}
                sx={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}
                onClick={() => setTempDrawerOpen(! tempDrawerOpen)}
            >
            </Button>
            <Drawer
                className={classes.temporaryDrawer}
                classes={{paper: classes.drawerPaper}}
                anchor="left"
                open={tempDrawerOpen}
                sx={{ 
                    display: { 
                        sx: "block", 
                        sm: "block", 
                        md: "block", 
                        lg: "none", 
                        xl: "none" 
                    } 
                }}
                variant="temporary"
            >
                <Button
                    color="secondary" 
                    endIcon={<CloseIcon />}
                    sx={{ position: "absolute", right: 0, zIndex: 1 }}
                    onClick={() => setTempDrawerOpen(! tempDrawerOpen)}
                >
                </Button>
                {drawer}
            </Drawer>
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
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Box 
                        sx={{
                            display: "flex", 
                            flexDirection: "column"
                        }}
                    >
                        <AppBar position="static" ref={appBarRef}>
                            <Toolbar>
                                Toolbar 3
                            </Toolbar>
                        </AppBar>
                        <Paper>
                            <Box ref={messengerPanelRef}>

                            </Box>
                            <Box className={classes.spacingPanel}></Box>
                        </Paper>
                        <Box 
                            ref={textFieldRef} 
                            sx={{ 
                                position: "relative", 
                                width: "100%" 
                            }}
                        >
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
                                        id="messageField"
                                        multiline
                                        maxRows={4}
                                        onChange={messageFieldChange}
                                        onKeyPress={messageFieldKeyPress}
                                        margin="dense"
                                        size="small"
                                        sx={{ flexGrow: 1 }}
                                    />
                                    <Button
                                        endIcon={<SendIcon/>}
                                        onClick={sendMessageButtonClick}
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
