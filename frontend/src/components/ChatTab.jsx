import React from "react";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const chatroom = (props) => {
	return(
		<ListItem>
			<ListItemButton>
				<ListItemAvatar>
					<Avatar>{props.chatroom.otherUser[0][0] + props.chatroom.otherUser[1][0]}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.chatroom.otherUser[0] + " " + props.chatroom.otherUser[1]}  
				/>
				<Divider/>
			</ListItemButton>
		</ListItem>
	);
};

export default chatroom;
