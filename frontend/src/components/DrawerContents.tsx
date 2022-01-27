import ButtonPanel from './ButtonPanel';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const DrawerContents = () => {
    return(
        <Container
            sx={{
                marginTop: '35px',
                position: 'static',
                width: '350px'
            }}
        >
            <AppBar
                position='static'
            >
                <Toolbar>
                    <ButtonPanel avatar={"AS"} />
                </Toolbar>
            </AppBar>
            <AppBar
                position='static'
            >
                <Toolbar>
                    <TextField
                        fullWidth
                        label='Search'
                        size='small'
                        variant='filled'
                    />
                </Toolbar>
            </AppBar>
        </Container>
    );
};

export default DrawerContents;
