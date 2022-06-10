import { lazy } from 'react';
// import About from "./About.js"
// import Projects from "./Projects.js"
const About = lazy(() => import("./About.js"));
const Projects = lazy(() => import("./Projects.js"));

const PAGES = {
    'About': About,
    'Projects': Projects
};

export default PAGES;