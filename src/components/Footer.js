import { Box, Typography } from '@mui/material';

function Footer(props) {
    return (
        <Box sx={{ bgcolor: 'primary.main', width: 1, height: 32, p: 2 }}>
            <Typography variant="caption" color='primary.contrastText'>
                © 2021 - 2023 Bell Chen. All rights reserved.
                All logos and trademarks are the property of their respective owners.
            </Typography>
        </Box>
    )
}

export default Footer;