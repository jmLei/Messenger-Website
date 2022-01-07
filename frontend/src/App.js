import React, { useEffect, useRef, useState } from "react";

import chatTabsSampleData from "./components/sampledata/ChatTabsSampleData";

import Messenger from "./components/Messenger";
import NavigationBar from "./components/NavigationBar";

import Appbar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    const [textFieldInput, setTextFieldInput] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);

    const chatTabsActive = useMediaQuery('(min-width: 1280px)');

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth"  });
    }, [messageHistory]);

    const onChangeHandler = (event) => {
        setTextFieldInput(event.target.value);
    };
    
    const onClickHandler = () => {
        if(textFieldInput.length > 0) {
            setMessageHistory(messageHistory => [...messageHistory,
                {
                    avatar: "AS", 
                    sender: "Andrew Shinjo",
                    time: "[12:54] Dec. 1, 2021",
                    text: textFieldInput
                }
            ]);
        }
    }

    const getLoginData = (loginData) => {
        console.log("App().getLoginData()");
        console.log(loginData);
        if(loginData.isLoggedIn) {
            // set up page
            axios.post("http://localhost:8080/user/signin", {
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
                                height: "100vh",
                                width: "100%",
                                bgcolor: "background.paper",
                                overflow: "auto",
                                
                            }}
                        >
                            {chatTabsSampleData.map( (chatTab) => {
                                    return (
                                        <ListItem key={chatTab.name} >
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
                    <NavigationBar getLoginData={getLoginData} />
                    <Box
                        sx = {{
                            minHeight: "70vh",
                            maxHeight: "70vh",
                            bgcolor: "background.paper",
                            overflow: "auto"
                        }}
                    >
                        <Messenger messageHistory={messageHistory}/>
                        <div ref={messagesEndRef}/>
                    </Box>                
                    <Appbar
                        position="static"
                        sx = {{
                            top: "auto", bottom: 0
                        }}
                    >
                        <Toolbar>
                            <TextField  
                                fullWidth
                                margin="normal"
                                maxRows={4}
                                multiline
                                size="small"
                                onChange={onChangeHandler}
                            />
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={onClickHandler}
                            >
                                Send
                            </Button>
                        </Toolbar>
                    </Appbar>
                </Grid>
            </Grid> 
        </div>
    );
}

export default App;
