import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const MessageBubble = (props) => {
    return(
        <div>
            <Card
                variant="outlined"
                sx={{
                    maxWidth: 500
                }}
            >
                <CardContent>
                    {props.messageBubble.time}
                </CardContent>
            </Card>
        </div>
    );
};

export default MessageBubble;