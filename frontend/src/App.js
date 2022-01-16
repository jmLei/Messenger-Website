import React, {useState, useEffect} from "react";
import Main from "./components/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import io from "socket.io-client";

// const socket = io('http://localhost:8080');

// socket.on('connect', () => {
//     console.log(socket.id);
// });

const theme = createTheme({
    palette: {
        primary: {
            main: "#FAFAFA"
        },
    }
});

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </div>
    );
}

export default App;
