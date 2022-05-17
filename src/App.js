import './App.css';
import { useNavigate } from "react-router-dom";
import {SocialButtons} from './components/SocialButton.js';
import { Avatar, Button, IconButton, Grid, ButtonGroup } from '@mui/material';

function App() {
  const navigate = useNavigate();

  const navigatePage = (e) => {
    navigate(e.target.id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 128, height: 128 }} />
          </Grid>

          <Grid item>
            <p>Bell Chen</p>
          </Grid>

          <Grid item alignItems="center" justifyContent="center">
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button id="about" onClick={navigatePage}>About</Button>
              <Button id="projects" onClick={navigatePage}>Projects</Button>
              <Button id="contact" onClick={navigatePage}>Contact</Button>
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
      </header>
    </div>
  );
}

export default App;
