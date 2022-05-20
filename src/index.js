import { Box, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import About from './pages/About.js';
// import Contact from './pages/Contact.js';
// import Projects from './pages/Projects.js';

const About = lazy(() => import('./pages/About.js'));
const Contact = lazy(() => import('./pages/Contact.js'));
const Projects = lazy(() => import('./pages/Projects.js'));

const theme = createTheme({
  palette: {
    // mode: 'dark',
    // '1976d2'
    primary: {
      light: '#78d3ff',
      main: '#31a2ff',
      dark: '#0074cb',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6d86ff',
      main: '#205AE8',
      dark: '#0032b5',
      contrastText: '#fff',
    },
    white: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    black: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
    }
  }
});

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
            <Route path="/" element={<App />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={progress}></Route>
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
