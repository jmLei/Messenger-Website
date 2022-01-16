import React, {useState, useEffect} from "react";
import Main from "./components/Main";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
