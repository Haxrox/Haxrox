import { NavigateBefore } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import NavigateButton from '../components/NavigationButton.js';
import { ProjectCard, ProjectDialog } from '../components/Project.js';
import PROJECTS from '../Projects-db.js';
/**
 * Add some sort of sorting algorithm? - move to backend (?)
 */

function Projects() {
    const [project, setProject] = useState(undefined);
    const navigate = useNavigate();

    return (
        <Box className="Projects">
            <Header tab="projects"></Header>
            <Grid container sx={{ p: 2, pb: 10 }} spacing={2} direction="row">
                {PROJECTS.map((project, index) =>
                    <Grid item key={index}>
                        <ProjectCard {...project} navigate={() => {
                            setProject(project);
                            navigate(project.title.replaceAll(" ", "-"));
                        }} />               
                    </Grid>
                )}
            </Grid>
            <ProjectDialog {...project} />
            <NavigateButton href='/about' left='16px'>
                <NavigateBefore />
                About
            </NavigateButton>
        </Box>
    );
}

export default Projects;
