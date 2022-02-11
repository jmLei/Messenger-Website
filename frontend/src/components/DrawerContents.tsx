import ButtonPanel from './ButtonPanel';
import ChatRoom from './ChatRoom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import APIHandler from '../Api';
import { useUserContext } from './UserContext';

const DrawerContents = () => {

    const [ chatrooms, setChatrooms ] = useState([]);
    const { userID } = useUserContext();

    useEffect(() => {
        console.log(`userID = ${userID}.`);
        console.log('useEffect');
        if(userID.length > 0) {
            APIHandler.getChatrooms(userID)
            .then(result => {
                setChatrooms(result.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [ userID ]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        if(name.length > 0) {
            APIHandler.searchUser(name)
            .then( response => {
                console.log(response.data);
            })
            .catch ( error => {
                console.log(error);
            });
        }
    };

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
                        onChange={onChangeHandler}
                        size='small'
                        variant='filled'
                    />
                </Toolbar>
            </AppBar>
            <Box>
                {
                    chatrooms.map(chatroom => <ChatRoom id={chatroom._id} key={chatroom._id} />)
                }
            </Box>
        </Container>
    );
};

export default DrawerContents;
