import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const chatroom = (props) => {
	return(
		<ListItem key={props.chatroom.chatroomID} >
			<ListItemButton>
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
