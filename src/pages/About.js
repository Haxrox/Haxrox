import Header from '../components/Header.js';
import {SocialButtons} from '../components/SocialButton.js';
import { Fab, Avatar, Button, IconButton, Grid, ButtonGroup, AppBar, Toolbar, Container, Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import {NavigateNext} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    return (
        <Box className="About">
            <Header></Header>
            <Box sx = {{m: 2}}>
                <Card variant="outlined" sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        About
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
            
            <Fab variant="extended" onClick={() => {navigate('/projects')}} sx={{position: 'fixed', bottom: 16, right: 16}} aria-label="Fab" color='primary' >
                PROJECTS
                <NavigateNext/>
            </Fab>
        </Box>
    );
}

export default About;