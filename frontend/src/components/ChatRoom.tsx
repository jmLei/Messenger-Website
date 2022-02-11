import React from "react";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Chatroom {
	id: string
    // avatar: string,
    // lastMessage: string,
    // name: string
}

const ChatRoom = ({ id }: Chatroom) => {
	return(
		<ListItem>
			<ListItemButton>
				<ListItemAvatar>
					
				</ListItemAvatar>
				<ListItemText
					primary={id}  
				/>
				<Divider/>
			</ListItemButton>
		</ListItem>
	);
};

export default ChatRoom;
