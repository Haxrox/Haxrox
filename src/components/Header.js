import { AppBar, Avatar, MenuItem, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const TABS = ['about', 'projects', 'contact']

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

                {props.tab ? TABS.map((tab) => <MenuItem key={tab} onClick={(e) => { navigate(`/${tab}`) }}>
                    <Typography textAlign="center" textTransform='uppercase'>{tab}</Typography>
                </MenuItem>) : null
                }                
            </Toolbar>
        </AppBar>
    )
}

export default Header;