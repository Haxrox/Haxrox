import { AppBar, Avatar, Toolbar, Typography, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


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
                    }}
                    onClick={(e) => { e.preventDefault(); navigate("/") }}
                >
                    Bell Chen
                </Typography>

                <MenuItem key={"About"} onClick={(e) => { navigate("/about") }}>
                    <Typography textAlign="center" textTransform='uppercase'>About</Typography>
                </MenuItem>
                <MenuItem key={"Projects"} onClick={(e) => { navigate("/projects") }}>
                    <Typography textAlign="center" textTransform='uppercase'>Projects</Typography>
                </MenuItem>
                <MenuItem key={"Contact"} onClick={(e) => { navigate("/contact") }}>
                    <Typography textAlign="center" textTransform='uppercase'>Contact</Typography>
                </MenuItem>
            </Toolbar>
        </AppBar>
    )
}

export default Header;