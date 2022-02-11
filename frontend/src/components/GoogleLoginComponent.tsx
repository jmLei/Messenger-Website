import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import APIHandler from '../Api';
import { useUserContext } from './UserContext';

import Cookies from "js-cookie";



const GoogleLoginComponent = () => {
    const [ loggedIn, setLoggedIn ] = useState(false);
    const { userID, setUserID } = useUserContext();

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
        console.log('Login failed.');
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
                        isSignedIn={true}
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
