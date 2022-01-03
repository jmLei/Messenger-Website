import ChatTabs from "./components/ChatTabs";
import NavigationBar from "./components/NavigationBar";

import axios from "axios";

const api = require("./api/api");

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
			<ChatTabs/>
		</div>
  );
}

export default App;
