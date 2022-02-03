import React, { useEffect, useRef, useState } from 'react';

import GoogleLoginComponent from './GoogleLoginComponent';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';

import SendIcon from '@mui/icons-material/Send';

const PrivateChat = () => {
    const [ message, setMessage ] = useState('');
    const [ space, setSpace ] = useState(0);

    const appBarRef = useRef<HTMLDivElement | null>(null);
    const messagesRef = useRef<HTMLElement | null>(null);
    const textFieldRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        updateSpacing();
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setMessage(event.currentTarget.value);
        updateSpacing();
    };

    const updateSpacing = () => {
        if(appBarRef.current && messagesRef.current && textFieldRef.current) {
            setSpace(
                appBarRef.current.scrollHeight +
                messagesRef.current.scrollHeight +
                textFieldRef.current.scrollHeight
            );
        }
    }

    return(
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <AppBar
                position='static'
                ref={appBarRef}
            >
                <Toolbar>
                    Appbar
                    <GoogleLoginComponent />
                </Toolbar>
            </AppBar>
            <Paper>
                <Box
                    ref={messagesRef}
                >
                    Messages
                </Box>
                <Box
                    sx={{
                        height: `calc(100vh - ${space}px)`
                    }}
                >
                </Box>
            </Paper>
            <Box
                ref={textFieldRef}
                sx={{
                    position: 'relative',
                    width: '100%'
                }}
            >
                <AppBar
                    position='static'
                    sx={{
                        bottom: 0,
                        display: 'flex',
                        position: 'absolute'
                    }}
                >
                    <Toolbar>
                        <TextField
                            id='messageField'
                            multiline
                            maxRows={4}
                            margin='dense'
                            onChange={onChangeHandler}
                            size='small'
                            sx={{ flexGrow: 1 }}
                        />
                        <Button
                            endIcon={ <SendIcon /> }
                            sx={{
                                alignSelf: 'flex-end',
                                top: '-10px'
                            }}
                            variant='contained'
                        >
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
};
export default PrivateChat;
