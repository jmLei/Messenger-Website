import {useEffect, useState} from "react";

import TextField from '@mui/material/TextField';

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
            setMessageBubbles(messageBubbles => [...messageBubbles, messageBubble]);
        }
    }, [time]);


    return(
        <div className="messengerContainer">
            <div className="leftPanel">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:"90%"}} />
            </div>

            <div className="rightPanel">
                <div className="messageBubbleContainer">
                    {
                        (messageBubbles.length === 0) ?
                        <p>Empty chatroom</p> :
                        messageBubbles.map(messageBubble => <MessageBubble messageBubble={messageBubble}/>)
                    }
                </div>

                <UserInterface
                    message={message}
                    handleInputChange={handleInputChange}
                    handleClick={handleClick}
                />
            </div>
        </div>
    )
};

export default Messenger;