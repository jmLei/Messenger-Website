import React, {useState, useEffect} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Box from '@mui/material/Box';

import PermanentDrawer from './components/PermanentDrawer';
import PrivateChat from './components/PrivateChat';
import TemporaryDrawer from './components/TemporaryDrawer';
import { UserContext } from './components/UserContext';

const theme = createTheme({
    palette: {
        primary: {
            main: "#FAFAFA"
        },
    }
});

function App() {
    const [ userID, setUserID ] = useState('');

    useEffect(() => {
        console.log(`userID = ${userID}`);
    }, [ userID ]);

    return (
        <UserContext.Provider value={{ userID, setUserID }}>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex' }}>
                    <div>
                        <PermanentDrawer />
                        <TemporaryDrawer />
                    </div>
                    <Box sx={{ flexGrow: 1 }}>
                        <PrivateChat />
                    </Box>
                </Box>
            </ThemeProvider>
        </UserContext.Provider>
    );
}

export default App;
