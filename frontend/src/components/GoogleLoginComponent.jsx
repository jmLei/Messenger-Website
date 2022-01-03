import React, {useEffect, useState} from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleLoginComponent = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const onSuccessHandler = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setIsLoggedIn(true);
    };

    const onFailureHandler = (response) => {
        console.log(response);
    }

    const onLogoutSuccessHandler = (response) => {
        console.log(response);
        setName("");
        setEmail("");
        setIsLoggedIn(false);
    }
    
    useEffect(() => {
        console.log("GoogleLoginComponent.useEffect()");
        const loginData = {
            "isLoggedIn": isLoggedIn,
            "name": name,
            "email": email
        }
        console.log(loginData);
        props.getLoginData(loginData);
    }, [isLoggedIn]);

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
                        buttonText="Sign In with Google"
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
