import React, { FC } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

import CreateIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';

interface ButtonPanelProps {
    avatar: string;
}

const ButtonPanel: React.FC<ButtonPanelProps> = (props:ButtonPanelProps) => {
    return(
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <Avatar
                sx={{
                    marginRight: '100px'
                }}
            >
                {props.avatar}
            </Avatar>
            <ButtonGroup>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
                <IconButton>
                    <VideoCallIcon />
                </IconButton>
                <IconButton>
                    <CreateIcon />
                </IconButton>
            </ButtonGroup>
        </Box>
    );
};
export default ButtonPanel;
