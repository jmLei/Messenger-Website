import Main from "./components/Main";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

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
