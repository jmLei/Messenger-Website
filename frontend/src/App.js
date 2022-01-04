import ChatTabs from "./components/ChatTabs";
import NavigationBar from "./components/NavigationBar";

import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import "./App.css";

import axios from "axios";


// { email } => { name }
// {email}_chatroomIDs = [ list of chatrooms user with {email} belongs to ]
// chatroomIDs = [ list of all chatroom IDs in the form { email1 }_{ email2 } ]
// {chatroomID} = [ list of messageIDs ]
// { messageID } = { text, time, sender }

function App() {

    const getLoginData = (loginData) => {
        console.log("App().getLoginData()");
        console.log(loginData);
        if(loginData.isLoggedIn) {
            // set up page
            axios.post("localhost:8080/user/signin", {
                email: loginData.email
            }).then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(error => console.log(error));
        }
    }

    return (
        <div>
		    <NavigationBar getLoginData={getLoginData}/>
            <div className="appPanel">
                <div className="leftPanel">
		    	    <ChatTabs/>
                </div>
                <div className="rightPanel">
                    <div id="messageList">
                        <h1>Message List</h1>
                    </div>
                    <div id="chatControls">
                        <AppBar position="static" color="primary" sx={{top: 'auto', buttom: 0}}>
                            <Toolbar>
                                <TextField labelHidden variant="filled" />
                            </Toolbar>
                        </AppBar>
                    </div>
                </div>
            </div>
		</div>
  );
}

export default App;
