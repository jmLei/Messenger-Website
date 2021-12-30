import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const MessageBubble = () => {
    const message = "Hello, world";

    return(
        <div>
            <Card
                variant="outlined"
                sx={{
                    backgroundColor: "gray",
                    maxWidth: 500
                }}
            >
                <CardContent>
                    {message}
                </CardContent>
            </Card>
        </div>
    );
};

export default MessageBubble;