import React from "react";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// props = {
//     String email
//     String time
//     String message
// }

const Message = (props) => {

    return(
        <React.Fragment>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>{props.message.avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {
                        <Typography variant="caption">{props.message.time}</Typography>
                    }
                    secondary = {
                        <Typography variant="body1">{props.message.text}</Typography>
                    }   
                />
            </ListItem>
        </React.Fragment>
    )
}

export default Message;
