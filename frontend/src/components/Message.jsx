import React from "react";

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
                    <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary = {
                        <React.Fragment>
                            <Typography variant="caption">{props.time}</Typography>
                        </React.Fragment>
                    }
                    secondary = {
                        <React.Fragment>
                            <Typography variant="body1">{props.message}</Typography>
                        </React.Fragment>
                    }   
                />
            </ListItem>
        </React.Fragment>
    )
}
