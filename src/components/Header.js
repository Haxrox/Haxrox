import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" sx = {{px: 2}}>
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
                    onClick={(e) => {e.preventDefault(); navigate("/")}}
                >
                    Bell Chen
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;