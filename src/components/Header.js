import { AppBar, Avatar, Toolbar, Typography, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const TABS = ['about', 'projects', 'contact']

function Header(props) {
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" sx={{ px: 2 }}>
            <Toolbar disableGutters>
                <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 32, height: 32 }} />

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
                    onClick={(e) => { e.preventDefault(); navigate("/") }}
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