import Header from '../components/Header.js';
import {SocialButtons} from '../components/SocialButton.js';
import { Fab, Avatar, Button, IconButton, Grid, ButtonGroup, AppBar, Toolbar, Container, Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import {NavigateNext, NavigateBefore} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    
    return (
        <Box className="Contact">
           <Header></Header>
            <Box sx = {{m: 2}}>
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
                        <SocialButtons height="24px" width="24px"/>
                    </CardActions>
                </Card>
            </Box>
            <Fab variant="extended" onClick={() => {navigate('/projects')}} sx={{position: 'fixed', bottom: 16, left: 16}} aria-label="Fab" color='primary' >
                <NavigateBefore/>
                Projects
            </Fab>
        </Box>
    );
}

export default Contact;
