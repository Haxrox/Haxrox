import './App.css';
import MaterialButton from './MaterialButton.js';
import { Avatar, Button, IconButton, Grid, ButtonGroup } from '@mui/material';
import { Delete } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing = {4} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
           <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 128, height: 128 }}/>
          </Grid>

          <Grid item>
            <p>Bell Chen</p>
          </Grid>
          
          <Grid item alignItems="center" justifyContent="center">
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button>About</Button>
              <Button>Projects</Button>
              <Button>Contact</Button>
            </ButtonGroup>
          </Grid>
         
          <Grid item alignItems="center" justifyContent="center">
            <Grid container spacing = {4} direction="row" alignItems="center" justifyContent="center">
              <Grid item>
                <IconButton aria-label="linkedin" className="socials">
                <a href="https://www.linkedin.com/in/bell-chen/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.svg" className="Socials-icon" alt="linkedin"/>
                </a>
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton aria-label="linkedin" className="socials">
                  <a href="https://github.com/Haxrox" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/GitHub-Mark-120px-plus.png" className="Socials-icon" alt="github"/>
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>  
        </Grid>
      </header>
    </div>
  );
}

export default App;
