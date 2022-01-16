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
			<ListItemButton
				onClick={() => console.log("Click")}
			>
				<ListItemAvatar>
					<Avatar>{props.chatroomTab.avatar}</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.chatroomTab.name[0] + " " + props.chatroomTab.name[1]}
					secondary = {
						<React.Fragment>
							<Typography
								variant="caption"
							>
								{props.chatroomTab.lastMessage}
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
