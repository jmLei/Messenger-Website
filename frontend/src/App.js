import React, { useEffect, useRef, useState } from "react";

import chatTabsSampleData from "./components/sampledata/ChatTabsSampleData";

import ChatTab from "./components/ChatTab";
import Main from "./components/Main";
import Messenger from "./components/Messenger";
import NavigationBar from "./components/NavigationBar";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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

function App() {
    const [ userProfile, setUserProfile ] = useState({ email: "", name: "" });
    const [ chatrooms, setChatrooms ] = useState([]);
    const [textFieldInput, setTextFieldInput] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);

    const chatTabsActive = useMediaQuery('(min-width: 1280px)');

    const messagesEndRef = useRef(null);
    const textFieldInputRef = useRef(null);

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
            
            textFieldInputRef.current.value = "";
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
            <Main />
        {/*
        <div>
            <Grid container sx={{ maxHeight: "100vh" }}>
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
								return (<ChatTab chatTab={chatTab}/>)
                            })}
                        </List>
                    }
                </Grid>
                <Grid item xs={12} sm={12} mg={12} lg={9}>
                    <Box
                        sx = {{
                            bgcolor: "background.paper",
                            maxHeight: "85vh",
                            overflow: "auto"
                        }}
                    >
                        <NavigationBar getLoginData={getLoginData}/>
                        <Messenger messageHistory={messageHistory}/>
                        <div ref={messagesEndRef}/>
                    </Box>                
                    <Box
                        sx = {{
                            top: "auto", bottom: 0
                        }}
                    >
                        <TextField  
                            fullWidth
                            inputRef={textFieldInputRef}
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
                    </Box>
                </Grid>
            </Grid> 
        </div>
        */}
        </div>
    );
}

export default App;
