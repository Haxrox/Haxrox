import { Avatar, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './App.css';
import { SocialButtons } from './components/SocialButton.js';
import Pages from './pages/index.js';

function App() {
  console.log(Object.keys(Pages));
  const navigate = useNavigate();

  const navigatePage = (e) => {
    navigate(e.target.id);
  }

  return (
    <div className="App">
      <Box className="App-header" sx={{ bgcolor: 'primary.main' }}>
        <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
          <Grid item>
            <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 128, height: 128 }} />
          </Grid>

          <Grid item>
            <Typography variant="h2" fontWeight="bold" textTransform='uppercase' color='primary.contrastText'>
              Bell Chen (WIP)
            </Typography>
          </Grid>

          <Grid item alignItems="center" justifyContent="center">
            <ButtonGroup variant="contained" aria-label="outlined button group" color='secondary'>
              {Pages.map(page =>
                <Button id={page.toLowerCase()} key={page} onClick={navigatePage} sx={{ width: 128 }}>{page}</Button>
              )}
            </ButtonGroup>
          </Grid>

          <Grid item alignItems="center" justifyContent="center">
            <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
              <Grid item>
                <SocialButtons />
              </Grid>
              {/* <Grid item>
                <SocialButton label="LinkedIn" url="https://www.linkedin.com/in/bell-chen/" icon = "/icons/LinkedIn.svg"/>
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
