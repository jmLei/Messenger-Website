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

const ChatTab = (props) => {
	return(
		<ListItem key={props.chatTab.name} >
			<ListItemButton>
				<ListItemAvatar>
					<Avatar>{props.chatTab.avatar}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.chatTab.name}
					secondary = {
						<React.Fragment>
							<Typography
								variant="caption"
							>
								{props.chatTab.message}
							</Typography>
						</React.Fragment>
					}      
				/>
				<Divider/>
			</ListItemButton>
		</ListItem>
	);
};

export default ChatTab;
