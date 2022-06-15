import { NavigateBefore } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from "../components/Error.js";
import Header from '../components/Header.js';
import Loading from '../components/Loading.js';
import NavigateButton from '../components/NavigationButton.js';
import { ProjectCard } from '../components/Project.js';
import ProjectsService from '../ProjectsService.js';

function Projects() {
    const [projectsData, setProjectsData] = useState([]);
    const [fetchedProjects, setFetchedProjects] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        ProjectsService.GetBasicProjects()
            .then(
                (result) => {
                    setFetchedProjects(true);
                    setProjectsData(result);
                },
                (error) => {
                    setFetchedProjects(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <Error {...error} />
    } else if (!fetchedProjects) {
        return <Loading />
    } else {
        return (
            <Box className="Projects">
                <Header tab="projects"></Header>
                <Grid container sx={{ p: 2, pb: 10 }} spacing={2} direction="row">
                    {projectsData.map((project, index) =>
                        <Grid item key={index}>
                            <ProjectCard {...project} navigate={() => {
                                // setProject(project);
                                navigate(project.title.replaceAll(" ", "-"));
                            }} />
                        </Grid>
                    )}
                </Grid>
                {/* <ProjectDialog {...project} /> */}
                <NavigateButton href='/about' left='16px'>
                    <NavigateBefore />
                    About
                </NavigateButton>
            </Box>
        );
    }
}

export default Projects;
