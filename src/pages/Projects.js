import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import {SocialButtons} from '../components/SocialButton.js';
import { Fab, Avatar, Button, IconButton, Grid, ButtonGroup, AppBar, Toolbar, Container, Box, Card, CardContent, CardActions, Typography } from '@mui/material';
import {NavigateNext, NavigateBefore} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

function Projects() {
    const navigate = useNavigate();
    return (
        <Box className="Projects">
           <Header></Header>
            <Box sx = {{m: 2}}>
                <Card variant="outlined" sx={{ minWidth: 275, minHeight: 1000 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Projects
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
            <NavigateButton href='/about' left='16px'>
                <NavigateBefore/>
                About
            </NavigateButton>
            <NavigateButton href='/contact' right='16px'>
                Contact
                <NavigateNext/>
            </NavigateButton>
        </Box>
    );
}

export default Projects;
