import React from "react";

import chatTabsSampleData from "./components/sampledata/ChatTabsSampleData";

import ChatTabs from "./components/ChatTabs";
import Messenger from "./components/Messenger";
import NavigationBar from "./components/NavigationBar";
import UserInterface from "./components/UserInterface";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import {Container} from "@material-ui/core";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "./App.css";

import axios from "axios";


// { email } => { name }
// {email}_chatroomIDs = [ list of chatrooms user with {email} belongs to ]
// chatroomIDs = [ list of all chatroom IDs in the form { email1 }_{ email2 } ]
// {chatroomID} = [ list of messageIDs ]
// { messageID } = { text, time, sender }

const sampleChatroomIDs = [
    "shinjo1233@gmail.com_shinjo1233@gmail.com",
    "john_smith@gmail.com_shinjo1233@gmail.com",
    "bob_lee@gmail.com_shinjo1233@gmail.com",
    "shinjo1233@gmail.com_victorKim@gmail.com"
]

const sampleChatrooms = {
        "shinjo1233@gmail.com_shinjo1233@gmail.com": [
            "shinjo1233@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_1",
            "shinjo1233@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_2",
            "shinjo1233@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_3"
        ],
        "john_smith@gmail.com_shinjo1233@gmail.com": [
            "john_smith@gmail.com_shinjo1233@gmail.com_msg_john_smith@gmail.com_1",
            "john_smith@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_2",
            "john_smith@gmail.com_shinjo1233@gmail.com_msg_john_smith@gmail.com_3"
        ],
        "bob_lee@gmail.com_shinjo1233@gmail.com": [
            "bob_lee@gmail.com_shinjo1233@gmail.com_msg_bob_lee@gmail.com_1",
        ],
        "shinjo1233@gmail.com_victorKim@gmail.com": [
            "shinjo1233@gmail.com_victorKim@gmail.com_msg_shinjo1233@gmail.com_1",
            "shinjo1233@gmail.com_victorKim@gmail.com_msg_victorKim@gmail.com_2"
        ]
}

const messages = {
    "shinjo1233@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_1": {
        "sender": "shinjo1233@gmail.com",
        "text": "This is a test.",
        "time": "Jan. 4, 2021 2:01PM"
    },

    "shinjo1233@gmail.com_shinjo1233@gmail.com_msg_shinjo1233@gmail.com_2": {
        "sender": "shinjo1233@gmail.com",
        "text": "Hello.",
        "time": "Jan. 4, 2021 2:03PM"
    },


}

function App() {
    const chatTabsActive = useMediaQuery('(min-width: 1280px)');

    const getLoginData = (loginData) => {
        console.log("App().getLoginData()");
        console.log(loginData);
        if(loginData.isLoggedIn) {
            // set up page
            axios.post("127.0.0.1:8080/user/signin", {
                email: loginData.email,
                name: loginData.name
            }).then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => console.log(error));
        }
    }

    return (
        <div>
            <Grid container>
                <Grid item lg={3}>
                    {
                        chatTabsActive && 
                        <List
                            sx = {{
                                maxHeight: "100vh",
                                width: "100%",
                                bgcolor: "background.paper",
                                overflow: "auto",
                                
                            }}
                        >
                            {chatTabsSampleData.map( (chatTab) => {
                                    return (
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar>{chatTab.avatar}</Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={chatTab.name}
                                                    secondary = {
                                                        <React.Fragment>
                                                            <Typography
                                                                variant="caption"
                                                            >
                                                                {chatTab.message}
                                                            </Typography>
                                                            </React.Fragment>
                                                    }      
                                                />
                                            <Divider/>
                                            </ListItemButton>
                                        </ListItem>
                                    )
                            })}
                        </List>
                    }
                    
                </Grid>
                <Grid item xs={12} sm={12} mg={12} lg={9}>
                    <Box
                        sx = {{
                            maxHeight: "90vh",
                            width: "100%",
                            bgcolor: "background.paper",
                            overflow: "auto"
                        }}
                    >
                        
                    </Box>
                    <TextField
                        multiline
                        maxRows={8}
                    />
                </Grid>
            </Grid> 
        </div>
    );
}

export default App;
