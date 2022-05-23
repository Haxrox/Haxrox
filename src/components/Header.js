import { AppBar, Avatar, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

import Pages from '../pages/index.js';

function Header(props) {
    const navigate = useNavigate();

    const navigateHome = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <AppBar position="sticky" sx={{ px: 2 }}>
            <Toolbar disableGutters>
                <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 32, height: 32 }} href="" component="a" onClick={navigateHome} />

                <Typography
                    variant="h6"
                    component="a"
                    noWrap
                    href=""
                    fontWeight="bold"
                    textTransform='uppercase'
                    sx={{
                        px: 2,
                        color: 'inherit',
                        textDecoration: 'none',
                        display: {xs: 'none', sm: 'block' }
                    }}
                    onClick={navigateHome}
                >
                    Bell Chen
                </Typography>

                {props.tab ? Pages.map(page => <MenuItem key={page} onClick={(e) => { navigate(`/${page.toLowerCase()}`) }}>
                    <Typography textAlign="center" textTransform='uppercase'>{page}</Typography>
                </MenuItem>) : null
                }                
            </Toolbar>
        </AppBar>
    )
}

export default Header;