import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';




const MessageBubble = (props) => {
    return(
        <div>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 500
                }}
            >
                <CardHeader
                    title={props.messageBubble.sender}
                    subheader={props.messageBubble.time}
                />
                <CardContent>
                    <Typography variant="body1">
                        {props.messageBubble.message}   
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default MessageBubble;