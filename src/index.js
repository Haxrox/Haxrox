import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // mode: 'dark',
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
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
