import UserInterface from "./UserInterface";
import Grid from '@mui/material/Grid';
import "./Messenger.css";

const Messenger = () => {
    return(
        <div className="messengerContainer">
            <div className="leftPanel">
                Left Panel
            </div>

            <div className="rightPanel">
                Right Panel
            </div>
        </div>
    )
};

export default Messenger;