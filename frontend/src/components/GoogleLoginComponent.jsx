import React, {useEffect, useState} from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import axios from "axios";
import Cookies from "js-cookie";

const GoogleLoginComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSuccessHandler = (response) => {
        console.log("GoogleLoginComponent.onSuccessHandler()");
        console.log(response);
        setIsLoggedIn(true);

        const idToken = response.getAuthResponse().id_token;

        axios.post("http://localhost:8080/user/signin",
            { token: idToken }, { withCredentials: true }
        ).then(res => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })

        // Print cookie
        const sessionToken = Cookies.get("session-token");
        console.log("Session Token:");
        console.log(sessionToken);
    };

    const onFailureHandler = (response) => {
        console.log("GoogleLoginComponent.onFailureHandler()");
        console.log(response);
    }

    const onLogoutSuccessHandler = (response) => {
        console.log("GoogleLoginComponent.onLogoutSuccessHandler()");
        console.log(response);
        setIsLoggedIn(false);
    }
    
    return(
        <React.Fragment>
            {
                isLoggedIn ? (
                    <GoogleLogout
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText={"Logout"}
                        onLogoutSuccess={onLogoutSuccessHandler}
                    ></GoogleLogout>
                ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText="Sign In"
                        onSuccess={onSuccessHandler}
                        onFailure={onFailureHandler}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                )
            }

        </React.Fragment>
    )
};

export default GoogleLoginComponent;
