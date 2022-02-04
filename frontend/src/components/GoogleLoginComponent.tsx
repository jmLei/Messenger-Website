import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import APIHandler from '../Api';

import axios from "axios";
import Cookies from "js-cookie";

const GoogleLoginComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ userID, setUserID ] = useState('');

    const onSuccessHandler = (response: any) => {
        const ID_token = response.getAuthResponse().id_token;
        const googleID = response.googleId;

        APIHandler.signin(ID_token)
        .then(response => {
            setLoggedIn(true);
            setUserID(googleID);
            Cookies.set('session-token', ID_token);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const onFailureHandler = () => {
        console.log("GoogleLoginComponent.onFailureHandler()");
    }

    const onLogoutSuccessHandler = () => {
        setLoggedIn(false);
        Cookies.remove("session-token");
    }
    
    return(
        <React.Fragment>
            {
                loggedIn ? 
                (
                    <GoogleLogout
                        clientId={process.env.REACT_APP_CLIENT_ID || ''}
                        buttonText={'Logout'}
                        onFailure={onFailureHandler}
                        onLogoutSuccess={onLogoutSuccessHandler}
                    ></GoogleLogout>
                ) : (
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID || ''}
                        buttonText={'Login'}
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
