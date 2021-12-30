import MessageBubble from "./MessageBubble";
import UserInterface from "./UserInterface";
import "./Messenger.css";

const Messenger = () => {
    return(
        <div className="messengerContainer">
            <div className="leftPanel">
                Left Panel
            </div>

            <div className="rightPanel">
                <MessageBubble/>
                <UserInterface/>
            </div>
        </div>
    )
};

export default Messenger;