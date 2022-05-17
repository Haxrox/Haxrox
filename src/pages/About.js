import Header from '../components/Header.js';
import {SocialButtons} from '../components/SocialButton.js';
import { Avatar, Button, IconButton, Grid, ButtonGroup, AppBar, Toolbar, Container, Box, Card, CardContent, CardActions, Typography } from '@mui/material';

function About() {
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
    </Box>
  );
}

export default About;
