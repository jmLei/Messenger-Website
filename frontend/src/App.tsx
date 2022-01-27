import React, {useState, useEffect} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import PermanentDrawer from './components/PermanentDrawer';
import TemporaryDrawer from './components/TemporaryDrawer';

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
                <PermanentDrawer />
                <TemporaryDrawer />
            </ThemeProvider>
        </div>
    );
}

export default App;
