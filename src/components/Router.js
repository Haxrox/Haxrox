
import React, { Suspense, useState, useEffect } from 'react';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import App from '../App';
import { Project } from './Project.js';
import Loading from './Loading.js';
import Error from './Error.js' ;
import ProjectsService from '../ProjectsService.js';
import PAGES from '../pages/index.js';

function Router() {
    const [fetchedProject, setFetchedProject] = useState(false);
    const [projectsData, setProjectsData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        ProjectsService.GetAllProjects()
            .then(
                (result) => {
                    setFetchedProject(true);
                    setProjectsData(result);
                },
                (error) => {
                    setFetchedProject(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <Error {...error} />
    } else if (!fetchedProject) {
        return <Loading />
    } else {
        return (
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<App />} />
                        {Object.entries(PAGES).map((page) =>
                            <Route path={page[0].toLowerCase()} key={page[0]} element={React.createElement(page[1])} />
                        )}
                        {/* <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="*" element={progress}/> */}
                        {projectsData.map((project, index) => <Route path={`/projects/${project.title.replaceAll(" ", "-")}`} element={<Project {...project} prev={index > 0 && projectsData[index - 1]} next={index < projectsData.length - 1 && projectsData[index + 1]} />} key={index} />)}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        )
    }
}

export default Router;