import { Box, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import { Project } from './components/Project.js';
import './index.css';
import PAGES from './pages/index.js';
import PROJECTS from './Projects-db';
import reportWebVitals from './reportWebVitals';
import THEME from './Theme.js';

const theme = createTheme(THEME);

const progress = (
  <Box alignItems="center" justifyContent="center" sx={{ display: 'flex', height: "100vh" }}>
    <CircularProgress />
  </Box>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={progress}>
          <Routes>
            <Route path="/" element={<App />} />
            {Object.entries(PAGES).map((page) =>
              <Route path={page[0].toLowerCase()} key={page[0]} element={React.createElement(page[1])} />
            )}
            {/* <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={progress}/> */}
            {PROJECTS.map((project, index) => <Route path={`/projects/${project.title.replaceAll(" ", "-")}`} element={<Project {...project} prev={index > 0 && PROJECTS[index - 1]} next={index < PROJECTS.length - 1 && PROJECTS[index + 1]} />} key={index} />)}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
