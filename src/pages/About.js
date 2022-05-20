import { NavigateNext } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { SocialButtons } from '../components/SocialButton.js';

// TODO: include education + courses (?)
function About() {
    return (
        <Box className="About">
            <Header tab="about"></Header>
            <Box sx={{ m: 2 }}>
                <Card variant="outlined" sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            About
                        </Typography>
                        <Typography variant="body2">
                            I am an undergraduate student at the University of British Columbia studying Computer Engineering. I am a committed worker with an eagerness to learn and grow through experience. I strive to further my knowledge in the tech industry and am always looking forward to learning something new.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <SocialButtons height="24px" width="24px" color='primary' />
                    </CardActions>
                </Card>
            </Box>

            <NavigateButton href='/projects' right='16px'>
                Projects
                <NavigateNext />
            </NavigateButton>
        </Box>
    );
}

export default About;
