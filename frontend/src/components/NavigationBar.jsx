import React from "react";

import GoogleLoginComponent from "./GoogleLoginComponent";

// React material-ui imports
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavigationBar = (props) => {
	return(
			<React.Fragment>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="fixed"
                        style={{ height:"10%" }}
                    >
						<Container maxWidth="xl">
							<Toolbar disableGutters>
								<Typography
									variant="h6"
									components="div"
									sx={{ flexGrow: 1 }}
								>
									MESSENGER
								</Typography>
								<Box sx={{ display: { xs: "none", md: "flex" } }}>
									<MenuItem>
										<IconButton
											size="large"
											color="inherit"
										>
											<Badge badgeContent={17} color="error">
												<NotificationsIcon/>
											</Badge>
										</IconButton>
									</MenuItem>
									<MenuItem>
										<GoogleLoginComponent getLoginData={props.getLoginData}/>
									</MenuItem>
								</Box>
							</Toolbar>
						</Container>
					</AppBar>
				</Box>
			</React.Fragment>
	);
};

export default NavigationBar;
