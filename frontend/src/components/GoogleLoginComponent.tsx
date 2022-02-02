import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import axios from "axios";
import Cookies from "js-cookie";

const GoogleLoginComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState( false );
    const [ userID, setUserID ] = useState( false );

    const onSuccessHandler = (response: any) => {
        const idToken = response.getAuthResponse().id_token;
        axios.post("http://localhost:8080/user/signin",
            { token: idToken }, { withCredentials: true }
        ).then(res => {
            setLoggedIn(true);
        }).catch((error) => {
            console.log(error);
        })
    };

    const onFailureHandler = () => {
        console.log("GoogleLoginComponent.onFailureHandler()");
    }

    const onLogoutSuccessHandler = () => {
        setLoggedIn( false );
        Cookies.remove("session-token");
    }
    
    return(
        <React.Fragment>
            {
                loggedIn ? 
                (
                    <GoogleLogout
                        clientId={process.env.REACT_APP_CLIENT_ID || ''}
                        buttonText={"Logout"}
                        onFailure={onFailureHandler}
                        onLogoutSuccess={onLogoutSuccessHandler}
                    ></GoogleLogout>
                ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID || ''}
                        buttonText="Login"
                        onSuccess={onSuccessHandler}
                        onFailure={onFailureHandler}
                        cookiePolicy={"single_host_origin"}
                    />
                )
            }

        </React.Fragment>
    )
};

export default GoogleLoginComponent;
