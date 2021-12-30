import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./UserInterface.css";

const UserInterface = (props) => {

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
                    onInput={props.handleInputChange}
                />
                <IconButton 
                    color="primary"
                    onClick={props.handleClick}
                >
                    <SendIcon/>
                </IconButton>
            </div>
    );
};

export default UserInterface;