import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const ChatTabs = () => {
	return(
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<List component="nav">
				<ListItem alignItems="flex-start">
					<ListItemButton>
						<Avatar src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
						<ListItemText primary="Spongebob Squarepants"/>
					</ListItemButton>
				</ListItem>
					<ListItemButton>
						<ListItemText primary="Patrick Star"/>
					</ListItemButton>
					<ListItemButton>
						<ListItemText primary="Eugene Krabs"/>
					</ListItemButton>
			</List>
		</Box>
	);
};

export default ChatTabs;
