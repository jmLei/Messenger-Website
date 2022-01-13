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
		<ListItem key={props.chatroom.chatroomID} >
			<ListItemButton
				onClick={() => props.setActiveChatroomID(props.chatroom.chatroomID)}
			>
				<ListItemAvatar>
					<Avatar>{props.chatroom.avatar}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.chatroom.name[0] + " " + props.chatroom.name[1]}
					secondary = {
						<React.Fragment>
							<Typography
								variant="caption"
							>
								{props.chatroom.lastMessage}
							</Typography>
						</React.Fragment>
					}      
				/>
				<Divider/>
			</ListItemButton>
		</ListItem>
	);
};

export default chatroom;
