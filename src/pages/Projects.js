import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Box } from '@mui/material';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { ProjectCard } from '../components/Project.js';

function Projects() {
    return (
        <Box className="Projects">
            <Header tab="projects"></Header>
            <Box sx={{ m: 2 }}>
                <ProjectCard />
            </Box>
            <NavigateButton href='/about' left='16px'>
                <NavigateBefore />
                About
            </NavigateButton>
            <NavigateButton href='/contact' right='16px'>
                Contact
                <NavigateNext />
            </NavigateButton>
        </Box>
    );
}

export default Projects;
