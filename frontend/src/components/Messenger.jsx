import React, {useEffect, useState} from "react";

import Message from "./Message";

import List from "@mui/material/List";

import "./Messenger.css";

const Messenger = (props) => {
    return(
        <List sx={{ width: "100%" }}>
            { 
                props.messageHistory.map((message) => {
                    return(
                        <Message 
                            key={message.text}
                            message={message}
                        />
                    )                   
                })
            }
        </List>
    )
};

export default Messenger;
