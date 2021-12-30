import {useState} from "react";

import MessageBubble from "./MessageBubble";
import UserInterface from "./UserInterface";
import "./Messenger.css";

const Messenger = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setMessages(messages => [...messages, message]);
    };

    return(
        <div className="messengerContainer">
            <div className="leftPanel">
                Left Panel
            </div>

            <div className="rightPanel">
                <div>
                    {messages.map(message => <MessageBubble message={message}/>)}
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