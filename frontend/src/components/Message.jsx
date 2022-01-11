import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

const Message = (props) => {

    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar>{props.message.avatar}</Avatar>
                }
                title={props.message.sender}
                subheader={props.message.time}
            />
            <CardContent>
                <Typography variant="body1">
                    {props.message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message;
