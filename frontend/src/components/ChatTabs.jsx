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
		<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<List>
				<ListItem alignItems="flex-start">
					<ListItemButton>
                        <ListItemAvatar>
						    <Avatar sx={{ width: 48, height: 48 }}>SS</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary="Spongebob Squarepants"
                            secondary= {
                                <React.Fragment>
                                    <Typography>
                                        I'll be in your neighborhood doing errands this...
                                    </Typography>
                                </React.Fragment>
                            }
                        />
					</ListItemButton>
				</ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
					<ListItemButton>
                        <ListItemAvatar>
                            <Avatar sx={{ width: 48, height: 48  }}>PS</Avatar>
                        </ListItemAvatar>
						<ListItemText
                            primary="Patrick Star"
                            secondary = {
                                <React.Fragment>
                                    <Typography>
                                        Wish I could come, but I'm out of town this...
                                    </Typography>
                                </React.Fragment>
                            }
                        />
					</ListItemButton>
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
					<ListItemButton>
                        <ListItemAvatar>
                            <Avatar sx={{ width: 48, height: 48  }}>EK</Avatar>
                        </ListItemAvatar>
						<ListItemText
                            primary="Eugene Krabs"
                            secondary = {
                                <React.Fragment>
                                    <Typography>
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
