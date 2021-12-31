import {useEffect, useState} from "react";

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
                time: time
            }
            setMessageBubbles(messageBubbles => [...messageBubbles, messageBubble]);
        }
    }, [time]);


    return(
        <div className="messengerContainer">
            <div className="leftPanel">
                Left Panel
            </div>

            <div className="rightPanel">
                <div>
                    {messageBubbles.map(messageBubble => <MessageBubble messageBubble={messageBubble}/>)}
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