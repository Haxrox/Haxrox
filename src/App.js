import { Avatar, Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './App.css';
import { SocialButton, SocialButtons } from './components/SocialButton.js';
import PAGES from './pages/index.js';

function App() {
  const navigate = useNavigate();

  const navigatePage = (e) => {
    navigate(e.target.id);
  }

  return (
    <Box className="App-header" sx={{ bgcolor: 'primary.main' }}>
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
            {Object.keys(PAGES).map(page =>
              <Button id={page.toLowerCase()} key={page} onClick={navigatePage} sx={{ width: 128 }}>{page}</Button>
            )}
          </ButtonGroup>
        </Grid>

        <Grid item alignItems="center" justifyContent="center">
          <SocialButtons>
            <SocialButton label="LeetCode" url="https://leetcode.com/Haxrox/" icon="/icons/LeetCode.svg" />
          </SocialButtons>
        </Grid>

      </Grid>
      <Typography variant="body1" fontWeight="bold" color='primary.contrastText' sx={{ position: 'fixed', bottom: '16px' }}>
        Portions of this website are still a WIP
      </Typography>

      <Typography variant="caption" color='primary.contrastText' sx={{ position: 'fixed', bottom: '0px' }}>
        © 2021 - 2023 Bell Chen. All rights reserved.
        All logos and trademarks are the property of their respective owners.
      </Typography>
    </Box>
  );
}

export default App;
