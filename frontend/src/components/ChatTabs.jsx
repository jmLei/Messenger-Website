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

const ChatTabs = () => {
	return(
		<Box sx={{  width: '100%', bgcolor: 'background.paper' }}>
			<List>
                <ListItem>
					<ListItemButton>
                        <ListItemAvatar>
                            <Avatar sx={{mr: 2, width: 56, height: 56  }}>EK</Avatar>
                        </ListItemAvatar>
						<ListItemText
                            primary="Eugene Krabs"
                            secondary = {
                                <React.Fragment>
                                    <Typography variant="caption">
                                        Do you have Paris recommendations?
                                    </Typography>
                                </React.Fragment>
                            }
                        />
					</ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>
			</List>
		</Box>
	);
};

export default ChatTabs;
