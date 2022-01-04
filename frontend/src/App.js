import ChatTabs from "./components/ChatTabs";
import NavigationBar from "./components/NavigationBar";
import TextField from "@mui/material/TextField";

import "./App.css";

import axios from "axios";

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
                    Right Panel here
                </div>
            </div>
		</div>
  );
}

export default App;
