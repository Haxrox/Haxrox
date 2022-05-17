import React from 'react';
import {Avatar, Typography, AppBar, Toolbar} from '@mui/material';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="sticky" sx = {{px: 2}}>
                <Toolbar disableGutters>
                    <Avatar alt="Avatar" src="/images/avatar.jpg" sx={{ width: 32, height: 32 }} />
                    <Typography
                        variant="h6"
                        component="a"
                        noWrap
                        href="/"
                        sx={{
                            px: 2,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bell Chen
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;