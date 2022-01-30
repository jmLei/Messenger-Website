import React from "react";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface Chatroom {
    avatar: string,
    lastMessage: string,
    name: string
}

const ChatTab = ({avatar, lastMessage, name}: Chatroom) => {
	return(
		<ListItem>
			<ListItemButton>
				<ListItemAvatar>
					<Avatar>{avatar}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={name}  
                    secondary={lastMessage}
				/>
				<Divider/>
			</ListItemButton>
		</ListItem>
	);
};

export default ChatTab;
