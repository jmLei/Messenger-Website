import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./UserInterface.css";

const UserInterface = () => {
    return(
        <div className="UIPanel">
                <TextareaAutosize
                    aria-label ="empty textarea"
                    placeholder="Write a message"
                    maxRows={5}  
                    style={{
                        fontSize:"14px",
                        width:"50%"
                    }}
                />
                <IconButton color="primary">
                    <SendIcon/>
                </IconButton>
            </div>
    );
};

export default UserInterface;