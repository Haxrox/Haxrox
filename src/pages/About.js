import { NavigateNext } from '@mui/icons-material';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import Header from '../components/Header.js';
import { SocialButtons } from '../components/SocialButton.js';

function About() {
    return (
        <Box className="About">
            <Header></Header>
            <Box sx={{ m: 2 }}>
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
                        <SocialButtons height="24px" width="24px" />
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
