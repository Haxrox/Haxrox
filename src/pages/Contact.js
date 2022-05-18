import { NavigateBefore } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, Fab, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import { SocialButtons } from '../components/SocialButton.js';

function Contact() {
    return (
        <Box className="Contact">
            <Header></Header>
            <Box sx={{ m: 2 }}>
                <Card variant="outlined" sx={{ minWidth: 275, minHeight: 1000 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Hello World!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <SocialButtons height="24px" width="24px" />
                    </CardActions>
                </Card>
            </Box>
            <NavigateButton href='/projects' left='16px'>
                <NavigateBefore />
                Projects
            </NavigateButton>
        </Box>
    );
}

export default Contact;
