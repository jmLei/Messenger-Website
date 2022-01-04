import React, {useEffect, useState} from "react";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";

import GoogleLoginComponent from "./GoogleLoginComponent";
import MessageBubble from "./MessageBubble";
import UserInterface from "./UserInterface";
import "./Messenger.css";

const Messenger = () => {
    const [message, setMessage] = useState("");
    const [time, setTime] = useState("");
    const [messageBubbles, setMessageBubbles] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        const now = new Date();
        setTime(now.toString());
    };

    useEffect(() => {
        if(time !== "") {
            const messageBubble = {
                message: message,
                sender: "Andrew Shinjo",
                time: time
            }
            setMessageBubbles(messageBubbles => 
                [...messageBubbles, messageBubble]);
        }
    }, [time]);

    return(
        <div>
            <List>
            </List>
            <UserInterface/>
        </div>
    )
};

export default Messenger;
