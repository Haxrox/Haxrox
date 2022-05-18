import './App.css';
import { useNavigate } from "react-router-dom";
import {SocialButtons} from './components/SocialButton.js';
import { Container, Box, Typography, Avatar, Button, IconButton, Grid, ButtonGroup } from '@mui/material';

function App() {
  const navigate = useNavigate();

  const navigatePage = (e) => {
    navigate(e.target.id);
  }

  return (
    <div className="App">
      <Box className="App-header" sx={{bgcolor: 'primary.main'}}>
        <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 128, height: 128 }} />
          </Grid>

          <Grid item> 
            <Typography variant="h2" fontWeight="bold" textTransform='uppercase' color='primary.contrastText'>
                Bell Chen
            </Typography>
          </Grid>

          <Grid item alignItems="center" justifyContent="center">
            <ButtonGroup variant="contained" aria-label="outlined button group" color='secondary'>
              <Button id="about" onClick={navigatePage} sx={{width: 128}}>About</Button>
              <Button id="projects" onClick={navigatePage} sx={{width: 128}}>Projects</Button>
              <Button id="contact" onClick={navigatePage} sx={{width: 128}}>Contact</Button>
            </ButtonGroup>
          </Grid>

          <Grid item alignItems="center" justifyContent="center">
            <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
              <Grid item>
                <SocialButtons/>
              </Grid>
              {/* <Grid item>
                <SocialButton label="LinkedIn" url="https://www.linkedin.com/in/bell-chen/" icon = "/icons/linkedin.svg"/>
              </Grid>

              <Grid item>
                <SocialButton label="GitHub" url="https://github.com/Haxrox" icon = "/icons/GitHub-Mark-120px-plus.png"/>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
