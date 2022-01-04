import ChatTabs from "./components/ChatTabs";
import Messenger from "./components/Messenger";
import NavigationBar from "./components/NavigationBar";
import UserInterface from "./components/UserInterface";
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
            axios.post("127.0.0.1:8080/user/signin", {
                email: loginData.email,
                name: loginData.name
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
                    <Messenger/>
                </div>
            </div>
		</div>
  );
}

export default App;
